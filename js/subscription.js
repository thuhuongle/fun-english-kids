// ============================================
// SUBSCRIPTION & CONTENT GATING
// Hệ thống gói dịch vụ và khóa nội dung
// ============================================
const Subscription = {
    plans: [
        {
            id: 'free', name: 'Miễn Phí', price: 0, priceLabel: 'Miễn phí',
            icon: '🎁', color: '#888',
            features: ['Lớp 1 đầy đủ', '7 module học tập', 'Bảng điểm cơ bản'],
            limits: { grades: [1], modules: 'all' }
        },
        {
            id: 'basic', name: 'Cơ Bản', price: 99000, priceLabel: '99.000đ/tháng',
            icon: '⭐', color: '#FF8C42',
            features: ['3 lớp tùy chọn', '7 module học tập', 'Dashboard phụ huynh', 'Đề thi không giới hạn', 'Hỗ trợ email'],
            limits: { grades: 3, modules: 'all' }
        },
        {
            id: 'premium', name: 'Premium', price: 199000, priceLabel: '199.000đ/tháng',
            icon: '👑', color: '#A855F7',
            features: ['Tất cả 12 lớp', '7 module học tập', 'Dashboard phụ huynh', 'Đề thi không giới hạn', 'Spaced Repetition AI', 'Hỗ trợ ưu tiên 24/7'],
            limits: { grades: 'all', modules: 'all' }
        },
        {
            id: 'yearly', name: 'Năm Học', price: 1490000, priceLabel: '1.490.000đ/năm',
            icon: '🏆', color: '#DC2626', badge: 'Tiết kiệm 38%',
            features: ['Tất cả 12 lớp trọn đời năm học', 'Toàn bộ tính năng Premium', 'Không lo gia hạn hàng tháng'],
            limits: { grades: 'all', modules: 'all' }
        }
    ],

    currentPlan: { plan: 'free', expiresAt: null },

    async load() {
        this.currentPlan = await DB.getSubscription();
    },

    canAccessGrade(grade) {
        if (grade === 1) return true; // Free tier
        const plan = this.plans.find(p => p.id === this.currentPlan.plan);
        if (!plan) return false;
        if (plan.limits.grades === 'all') return true;
        if (Array.isArray(plan.limits.grades)) return plan.limits.grades.includes(grade);
        return false;
    },

    canAccessModule(mod) {
        const plan = this.plans.find(p => p.id === this.currentPlan.plan);
        if (!plan) return true;
        if (plan.limits.modules === 'all') return true;
        return plan.limits.modules.includes(mod);
    },

    isExpired() {
        if (!this.currentPlan.expiresAt) return this.currentPlan.plan === 'free' ? false : true;
        return new Date(this.currentPlan.expiresAt) < new Date();
    },

    renderPricingPage() {
        showScreen('subscriptionScreen');
        const current = this.currentPlan.plan;
        document.getElementById('subscriptionContent').innerHTML = `
            <div style="text-align:center;margin-bottom:25px">
                <h2 style="font-family:'Fredoka One',cursive;font-size:1.8rem;color:#A855F7;margin-bottom:8px">Nâng Cấp Tài Khoản</h2>
                <p style="color:#888">Mở khóa toàn bộ giáo trình lớp 1-12 cho con em</p>
                <p style="margin-top:8px;font-size:.9rem">Gói hiện tại: <strong style="color:${this.plans.find(p=>p.id===current)?.color||'#888'}">${this.plans.find(p=>p.id===current)?.name||'Miễn Phí'}</strong></p>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:15px;margin-bottom:25px">
                ${this.plans.map(plan => `
                    <div style="background:#fff;border-radius:20px;padding:25px;text-align:center;border:3px solid ${plan.id===current?plan.color:'#eee'};box-shadow:0 4px 15px rgba(0,0,0,.08);position:relative;${plan.badge?'':''}">
                        ${plan.badge ? `<div style="position:absolute;top:-10px;right:15px;background:${plan.color};color:#fff;padding:3px 12px;border-radius:20px;font-size:.75rem;font-weight:800">${plan.badge}</div>` : ''}
                        <div style="font-size:2.5rem;margin-bottom:8px">${plan.icon}</div>
                        <h3 style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:${plan.color}">${plan.name}</h3>
                        <div style="font-family:'Fredoka One',cursive;font-size:1.5rem;margin:10px 0;color:#333">${plan.priceLabel}</div>
                        <ul style="text-align:left;list-style:none;margin-bottom:15px">
                            ${plan.features.map(f => `<li style="padding:4px 0;font-size:.9rem;color:#555">✅ ${f}</li>`).join('')}
                        </ul>
                        ${plan.id === current ?
                            `<button disabled style="background:#eee;color:#888;border:none;padding:10px 25px;border-radius:14px;font-weight:700;font-family:'Nunito',sans-serif;width:100%">Gói hiện tại</button>` :
                            plan.id === 'free' ? '' :
                            `<button onclick="Subscription.showPayment('${plan.id}')" style="background:linear-gradient(135deg,${plan.color},${plan.color}dd);color:#fff;border:none;padding:10px 25px;border-radius:14px;font-weight:700;cursor:pointer;font-family:'Nunito',sans-serif;width:100%;transition:all .2s">Chọn gói này</button>`
                        }
                    </div>
                `).join('')}
            </div>

            <div style="background:#fff;border-radius:20px;padding:25px;box-shadow:0 4px 15px rgba(0,0,0,.08)">
                <h3 style="font-family:'Fredoka One',cursive;margin-bottom:15px;color:#6366F1">💳 Phương thức thanh toán</h3>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
                    <div style="background:#f8f8f8;padding:15px;border-radius:14px;text-align:center">
                        <div style="font-size:2rem;margin-bottom:5px">📱</div>
                        <strong>Momo</strong>
                        <p style="font-size:.8rem;color:#888;margin-top:4px">Quét QR hoặc chuyển khoản</p>
                    </div>
                    <div style="background:#f8f8f8;padding:15px;border-radius:14px;text-align:center">
                        <div style="font-size:2rem;margin-bottom:5px">🏦</div>
                        <strong>VNPay</strong>
                        <p style="font-size:.8rem;color:#888;margin-top:4px">Thẻ ngân hàng nội địa</p>
                    </div>
                    <div style="background:#f8f8f8;padding:15px;border-radius:14px;text-align:center">
                        <div style="font-size:2rem;margin-bottom:5px">💰</div>
                        <strong>Chuyển khoản</strong>
                        <p style="font-size:.8rem;color:#888;margin-top:4px">Ngân hàng trực tiếp</p>
                    </div>
                </div>
            </div>
        `;
    },

    showPayment(planId) {
        const plan = this.plans.find(p => p.id === planId);
        if (!plan) return;

        document.getElementById('subscriptionContent').innerHTML = `
            <div style="max-width:500px;margin:0 auto">
                <div style="background:#fff;border-radius:20px;padding:30px;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.1)">
                    <div style="font-size:3rem;margin-bottom:10px">${plan.icon}</div>
                    <h3 style="font-family:'Fredoka One',cursive;color:${plan.color};margin-bottom:5px">${plan.name}</h3>
                    <div style="font-family:'Fredoka One',cursive;font-size:2rem;margin-bottom:20px">${plan.priceLabel}</div>

                    <div style="background:#f0f0f0;border-radius:14px;padding:20px;margin-bottom:20px;text-align:left">
                        <h4 style="margin-bottom:10px">📱 Thanh toán qua Momo:</h4>
                        <p style="font-size:.9rem;color:#555">1. Mở app Momo</p>
                        <p style="font-size:.9rem;color:#555">2. Chuyển tiền đến: <strong>0xxx xxx xxx</strong></p>
                        <p style="font-size:.9rem;color:#555">3. Số tiền: <strong>${plan.price.toLocaleString('vi-VN')}đ</strong></p>
                        <p style="font-size:.9rem;color:#555">4. Nội dung: <strong>FEK-${Auth.currentUser?.uid?.slice(0,8) || 'OFFLINE'}-${planId.toUpperCase()}</strong></p>
                    </div>

                    <div style="background:#FFF8E1;border-radius:14px;padding:15px;margin-bottom:20px">
                        <p style="font-size:.85rem;color:#F59E0B;font-weight:700">⚠️ Sau khi thanh toán, tài khoản sẽ được kích hoạt trong vòng 24 giờ. Liên hệ hỗ trợ nếu cần giúp đỡ.</p>
                    </div>

                    <div style="display:flex;gap:10px;justify-content:center">
                        <button onclick="Subscription.renderPricingPage()" class="btn-next" style="background:linear-gradient(135deg,#888,#aaa)">← Quay lại</button>
                        <button onclick="goHome()" class="btn-next" style="background:linear-gradient(135deg,var(--blue),var(--green))">Về trang chủ</button>
                    </div>
                </div>
            </div>
        `;
    }
};
