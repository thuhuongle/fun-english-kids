// ============================================
// SUBSCRIPTION & CONTENT GATING
// Hệ thống gói dịch vụ, funnel & CTA
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
            features: ['3 lớp tùy chọn', '9 module học tập', 'Dashboard phụ huynh', 'Đề thi không giới hạn', 'Feedback thông minh', 'Hỗ trợ email'],
            limits: { grades: 3, modules: 'all' }
        },
        {
            id: 'premium', name: 'Premium', price: 199000, priceLabel: '199.000đ/tháng',
            icon: '👑', color: '#A855F7', popular: true,
            features: ['Tất cả 12 lớp', '9 module học tập', 'Dashboard phụ huynh', 'Đề thi không giới hạn', 'Lộ trình cá nhân hóa', 'Huy chương & XP đầy đủ', 'Hỗ trợ ưu tiên 24/7'],
            limits: { grades: 'all', modules: 'all' }
        },
        {
            id: 'yearly', name: 'Năm Học', price: 1490000, priceLabel: '1.490.000đ/năm',
            icon: '🏆', color: '#DC2626', badge: 'Tiết kiệm 38%',
            features: ['Tất cả 12 lớp trọn đời năm học', 'Toàn bộ tính năng Premium', 'Không lo gia hạn hàng tháng', 'Ưu tiên hỗ trợ VIP'],
            limits: { grades: 'all', modules: 'all' }
        }
    ],

    currentPlan: { plan: 'free', expiresAt: null },

    async load() {
        this.currentPlan = await DB.getSubscription();
    },

    canAccessGrade(grade) {
        if (grade === 1) return true;
        // Check trial
        if (this.isTrialActive()) return true;
        const plan = this.plans.find(p => p.id === this.currentPlan.plan);
        if (!plan) return false;
        if (plan.limits.grades === 'all') return true;
        if (Array.isArray(plan.limits.grades)) return plan.limits.grades.includes(grade);
        return false;
    },

    canAccessModule(mod) {
        const plan = this.plans.find(p => p.id === this.currentPlan.plan);
        if (!plan) return false;
        if (plan.limits.modules === 'all') return true;
        if (Array.isArray(plan.limits.modules)) return plan.limits.modules.includes(mod);
        return false;
    },

    isExpired() {
        if (this.currentPlan.plan === 'free') return false;
        if (!this.currentPlan.expiresAt) return false;
        return new Date(this.currentPlan.expiresAt) < new Date();
    },

    // =====================
    // FREE TRIAL SYSTEM
    // =====================
    isTrialActive() {
        const trialEnd = localStorage.getItem('fekTrialEnd');
        if (!trialEnd) return false;
        return new Date(trialEnd) > new Date();
    },

    getTrialDaysLeft() {
        const trialEnd = localStorage.getItem('fekTrialEnd');
        if (!trialEnd) return 0;
        const diff = new Date(trialEnd) - new Date();
        return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    },

    hasUsedTrial() {
        return localStorage.getItem('fekTrialUsed') === 'true';
    },

    startTrial() {
        if (this.hasUsedTrial()) return false;
        const end = new Date();
        end.setDate(end.getDate() + 7);
        localStorage.setItem('fekTrialEnd', end.toISOString());
        localStorage.setItem('fekTrialUsed', 'true');
        return true;
    },

    // =====================
    // SMART CTA SYSTEM
    // =====================
    // Show CTA after completing a lesson with good score
    showPostLessonCTA(container, score, total) {
        if (this.currentPlan.plan !== 'free' || this.isTrialActive()) return;
        const pct = Math.round((score / total) * 100);
        if (pct < 50) return; // Only show to engaged users

        const ctaDiv = document.createElement('div');
        ctaDiv.style.cssText = 'margin-top:20px;background:linear-gradient(135deg,#F3E8FF,#EDE9FE);border:2px solid #A855F7;border-radius:20px;padding:20px;text-align:center;animation:popIn .5s';
        ctaDiv.innerHTML = `
            <div style="font-size:2rem;margin-bottom:8px">🌟</div>
            <div style="font-family:'Fredoka One',cursive;font-size:1.1rem;color:#7C3AED;margin-bottom:6px">Con học giỏi quá!</div>
            <p style="color:#666;font-size:.9rem;margin-bottom:12px">Mở khóa <strong>tất cả 12 lớp</strong> để con tiếp tục phát triển. Dùng thử miễn phí 7 ngày!</p>
            <button onclick="Subscription.showTrialOffer()" style="background:linear-gradient(135deg,#A855F7,#6366F1);color:#fff;border:none;padding:12px 30px;border-radius:14px;font-size:1rem;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;transition:all .2s">
                🎁 Dùng thử MIỄN PHÍ 7 ngày
            </button>
            <p style="font-size:.75rem;color:#aaa;margin-top:8px">Không cần thẻ tín dụng • Hủy bất kỳ lúc nào</p>
        `;
        container.appendChild(ctaDiv);
    },

    // Show CTA when user hits a paywall (locked grade)
    showPaywallCTA() {
        showScreen('subscriptionScreen');
        const trialAvail = !this.hasUsedTrial();
        document.getElementById('subscriptionContent').innerHTML = `
            <div style="max-width:500px;margin:0 auto;text-align:center">
                <div style="background:linear-gradient(135deg,#A855F7,#6366F1);border-radius:24px;padding:35px;color:#fff;margin-bottom:20px">
                    <div style="font-size:3.5rem;margin-bottom:10px">🔒</div>
                    <h2 style="font-family:'Fredoka One',cursive;font-size:1.6rem;margin-bottom:8px">Nội dung này cần nâng cấp</h2>
                    <p style="opacity:.9;font-size:.95rem">Gói miễn phí chỉ bao gồm Lớp 1. Nâng cấp để mở khóa toàn bộ 12 lớp với giáo trình đầy đủ!</p>
                </div>

                ${trialAvail ? `
                <div style="background:linear-gradient(135deg,#FFE66D,#FF8C42);border-radius:20px;padding:25px;margin-bottom:20px;color:#fff">
                    <div style="font-size:2.5rem;margin-bottom:8px">🎁</div>
                    <h3 style="font-family:'Fredoka One',cursive;font-size:1.3rem;margin-bottom:6px">Dùng thử MIỄN PHÍ 7 ngày!</h3>
                    <p style="opacity:.9;font-size:.9rem;margin-bottom:15px">Trải nghiệm toàn bộ tính năng Premium mà không mất phí. Không cần thẻ tín dụng.</p>
                    <button onclick="Subscription.activateTrial()" style="background:#fff;color:#FF8C42;border:none;padding:14px 35px;border-radius:14px;font-size:1.1rem;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;box-shadow:0 4px 15px rgba(0,0,0,.15)">
                        Bắt đầu dùng thử ngay! 🚀
                    </button>
                </div>
                ` : ''}

                <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:15px">
                    <div style="background:#fff;border-radius:12px;padding:10px 16px;box-shadow:0 2px 8px rgba(0,0,0,.05);font-size:.85rem">
                        <span style="color:var(--green);font-weight:800">✅</span> 12 lớp đầy đủ
                    </div>
                    <div style="background:#fff;border-radius:12px;padding:10px 16px;box-shadow:0 2px 8px rgba(0,0,0,.05);font-size:.85rem">
                        <span style="color:var(--green);font-weight:800">✅</span> 9 module học tập
                    </div>
                    <div style="background:#fff;border-radius:12px;padding:10px 16px;box-shadow:0 2px 8px rgba(0,0,0,.05);font-size:.85rem">
                        <span style="color:var(--green);font-weight:800">✅</span> Feedback thông minh
                    </div>
                    <div style="background:#fff;border-radius:12px;padding:10px 16px;box-shadow:0 2px 8px rgba(0,0,0,.05);font-size:.85rem">
                        <span style="color:var(--green);font-weight:800">✅</span> Huy chương & XP
                    </div>
                </div>

                <button onclick="Subscription.renderPricingPage()" style="background:linear-gradient(135deg,#A855F7,#6366F1);color:#fff;border:none;padding:12px 30px;border-radius:14px;font-size:1rem;font-weight:700;cursor:pointer;font-family:'Nunito',sans-serif;margin-right:8px">
                    📋 Xem bảng giá
                </button>
                <button onclick="goHome()" style="background:linear-gradient(135deg,#888,#aaa);color:#fff;border:none;padding:12px 30px;border-radius:14px;font-size:1rem;font-weight:700;cursor:pointer;font-family:'Nunito',sans-serif">
                    ← Quay lại
                </button>
            </div>
        `;
    },

    // Activate trial
    activateTrial() {
        if (this.startTrial()) {
            SoundFX.complete();
            showConfetti();
            document.getElementById('subscriptionContent').innerHTML = `
                <div style="max-width:450px;margin:0 auto;text-align:center;padding:30px">
                    <div style="font-size:4rem;margin-bottom:15px;animation:bounce 1s infinite">🎉</div>
                    <h2 style="font-family:'Fredoka One',cursive;font-size:1.8rem;color:#22C55E;margin-bottom:10px">Chúc mừng!</h2>
                    <p style="font-size:1.1rem;color:#555;margin-bottom:8px">Bạn đã kích hoạt <strong style="color:#A855F7">Premium 7 ngày miễn phí</strong>!</p>
                    <p style="color:#888;font-size:.9rem;margin-bottom:20px">Toàn bộ 12 lớp và tính năng Premium đã được mở khóa. Hãy bắt đầu khám phá ngay!</p>
                    <div style="background:#F0FDF4;border:2px solid #22C55E;border-radius:14px;padding:15px;margin-bottom:20px">
                        <p style="font-weight:700;color:#15803D">⏰ Trial hết hạn sau: <strong>${this.getTrialDaysLeft()} ngày</strong></p>
                    </div>
                    <button onclick="goHome()" class="btn-next" style="background:linear-gradient(135deg,var(--blue),var(--green));font-size:1.1rem;padding:14px 35px">
                        🚀 Bắt đầu học ngay!
                    </button>
                </div>
            `;
            speakVi('Chúc mừng! Bạn đã kích hoạt gói dùng thử miễn phí 7 ngày!');
        } else {
            alert('Bạn đã sử dụng lượt dùng thử rồi. Vui lòng chọn gói trả phí.');
            this.renderPricingPage();
        }
    },

    // Show trial offer popup (from CTA)
    showTrialOffer() {
        if (this.hasUsedTrial()) {
            this.renderPricingPage();
            return;
        }
        this.showPaywallCTA();
    },

    // =====================
    // IMPROVED PRICING PAGE
    // =====================
    renderPricingPage() {
        showScreen('subscriptionScreen');
        const current = this.currentPlan.plan;
        const trialActive = this.isTrialActive();
        const trialAvail = !this.hasUsedTrial();

        let html = `
            <div style="text-align:center;margin-bottom:25px">
                <h2 style="font-family:'Fredoka One',cursive;font-size:1.8rem;color:#A855F7;margin-bottom:8px">Đầu tư cho tương lai con</h2>
                <p style="color:#666;font-size:1rem">Giáo trình tiếng Anh chuẩn K1-12 • 9 module học tập • Feedback AI</p>
                ${trialActive ? `<div style="background:#F0FDF4;display:inline-block;padding:8px 20px;border-radius:20px;margin-top:10px;border:2px solid #22C55E"><span style="color:#15803D;font-weight:800">🎁 Trial Premium: còn ${this.getTrialDaysLeft()} ngày</span></div>` : ''}
            </div>

            <!-- Social Proof -->
            <div style="display:flex;gap:15px;justify-content:center;margin-bottom:20px;flex-wrap:wrap">
                <div style="display:flex;align-items:center;gap:6px;font-size:.9rem;color:#666">
                    <span style="color:#F59E0B">⭐⭐⭐⭐⭐</span> <strong>4.9/5</strong> đánh giá
                </div>
                <div style="font-size:.9rem;color:#666">👨‍👩‍👧‍👦 <strong>2,500+</strong> phụ huynh tin dùng</div>
                <div style="font-size:.9rem;color:#666">📚 <strong>12 lớp</strong> • <strong>1000+</strong> bài học</div>
            </div>`;

        // Trial banner (if available and not used)
        if (trialAvail && current === 'free' && !trialActive) {
            html += `
            <div style="background:linear-gradient(135deg,#FFE66D,#FF8C42);border-radius:20px;padding:20px;text-align:center;margin-bottom:20px;color:#fff">
                <div style="font-size:1.8rem;margin-bottom:6px">🎁</div>
                <div style="font-family:'Fredoka One',cursive;font-size:1.2rem;margin-bottom:6px">Dùng thử MIỄN PHÍ 7 ngày</div>
                <p style="font-size:.9rem;opacity:.9;margin-bottom:12px">Trải nghiệm toàn bộ Premium • Không cần thẻ tín dụng • Hủy bất kỳ lúc nào</p>
                <button onclick="Subscription.activateTrial()" style="background:#fff;color:#FF8C42;border:none;padding:12px 30px;border-radius:14px;font-size:1rem;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;box-shadow:0 4px 15px rgba(0,0,0,.15)">
                    Kích hoạt ngay! 🚀
                </button>
            </div>`;
        }

        // Plans grid
        html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:15px;margin-bottom:25px">`;
        this.plans.forEach(plan => {
            const isCurrent = plan.id === current;
            const isPopular = plan.popular;
            html += `
                <div style="background:#fff;border-radius:20px;padding:25px;text-align:center;border:3px solid ${isCurrent ? plan.color : isPopular ? '#A855F7' : '#eee'};box-shadow:${isPopular ? '0 8px 30px rgba(168,85,247,.2)' : '0 4px 15px rgba(0,0,0,.08)'};position:relative;${isPopular ? 'transform:scale(1.03)' : ''}">
                    ${plan.badge ? `<div style="position:absolute;top:-10px;right:15px;background:${plan.color};color:#fff;padding:3px 12px;border-radius:20px;font-size:.75rem;font-weight:800">${plan.badge}</div>` : ''}
                    ${isPopular ? `<div style="position:absolute;top:-10px;left:15px;background:#A855F7;color:#fff;padding:3px 12px;border-radius:20px;font-size:.75rem;font-weight:800">Phổ biến nhất</div>` : ''}
                    <div style="font-size:2.5rem;margin-bottom:8px">${plan.icon}</div>
                    <h3 style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:${plan.color}">${plan.name}</h3>
                    <div style="font-family:'Fredoka One',cursive;font-size:1.5rem;margin:10px 0;color:#333">${plan.priceLabel}</div>
                    ${plan.price > 0 ? `<div style="font-size:.8rem;color:#888;margin-bottom:8px">≈ ${Math.round(plan.price / (plan.id === 'yearly' ? 365 : 30)).toLocaleString('vi-VN')}đ/ngày</div>` : ''}
                    <ul style="text-align:left;list-style:none;margin-bottom:15px">
                        ${plan.features.map(f => `<li style="padding:4px 0;font-size:.9rem;color:#555">✅ ${f}</li>`).join('')}
                    </ul>
                    ${isCurrent ?
                        `<button disabled style="background:#eee;color:#888;border:none;padding:12px 25px;border-radius:14px;font-weight:700;font-family:'Nunito',sans-serif;width:100%">Gói hiện tại</button>` :
                        plan.id === 'free' ? '' :
                        `<button onclick="Subscription.showPayment('${plan.id}')" style="background:linear-gradient(135deg,${plan.color},${plan.color}dd);color:#fff;border:none;padding:12px 25px;border-radius:14px;font-weight:700;cursor:pointer;font-family:'Nunito',sans-serif;width:100%;transition:all .2s;font-size:1rem">
                            ${isPopular ? '👑 Chọn Premium' : 'Chọn gói này →'}
                        </button>`
                    }
                </div>`;
        });
        html += `</div>`;

        // Comparison table
        html += `
            <div style="background:#fff;border-radius:20px;padding:25px;box-shadow:0 4px 15px rgba(0,0,0,.08);margin-bottom:20px">
                <h3 style="font-family:'Fredoka One',cursive;margin-bottom:15px;color:#6366F1;text-align:center">📊 So sánh chi tiết</h3>
                <div style="overflow-x:auto">
                <table style="width:100%;border-collapse:collapse;font-size:.85rem">
                    <tr style="background:#F3E8FF">
                        <th style="padding:10px;text-align:left;border-radius:10px 0 0 0">Tính năng</th>
                        <th style="padding:10px;text-align:center">🎁 Free</th>
                        <th style="padding:10px;text-align:center">⭐ Basic</th>
                        <th style="padding:10px;text-align:center;background:#EDE9FE;border-radius:0 10px 0 0">👑 Premium</th>
                    </tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Số lớp</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">1 lớp</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">3 lớp</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0;background:#FAFAFE"><strong>12 lớp</strong></td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Module học tập</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">7</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">9</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0;background:#FAFAFE"><strong>9</strong></td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Ngữ pháp & Đọc hiểu</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">❌</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">✅</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0;background:#FAFAFE">✅</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Phát âm song ngữ</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">✅</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">✅</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0;background:#FAFAFE">✅</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Feedback thông minh</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">Cơ bản</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">✅</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0;background:#FAFAFE"><strong>Nâng cao</strong></td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Lộ trình cá nhân</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">❌</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">❌</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0;background:#FAFAFE">✅</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Dashboard phụ huynh</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">❌</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0">✅</td><td style="padding:8px;text-align:center;border-bottom:1px solid #f0f0f0;background:#FAFAFE">✅</td></tr>
                    <tr><td style="padding:8px">Hỗ trợ</td><td style="padding:8px;text-align:center">❌</td><td style="padding:8px;text-align:center">Email</td><td style="padding:8px;text-align:center;background:#FAFAFE"><strong>24/7 ưu tiên</strong></td></tr>
                </table>
                </div>
            </div>`;

        // Testimonials
        html += `
            <div style="background:#fff;border-radius:20px;padding:25px;box-shadow:0 4px 15px rgba(0,0,0,.08);margin-bottom:20px">
                <h3 style="font-family:'Fredoka One',cursive;margin-bottom:15px;color:#22C55E;text-align:center">💬 Phụ huynh nói gì?</h3>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
                    <div style="background:#F0FDF4;padding:15px;border-radius:14px;border-left:4px solid #22C55E">
                        <p style="font-size:.85rem;color:#555;font-style:italic;margin-bottom:6px">"Con tôi rất thích học trên này. Từ lúc dùng Premium, điểm tiếng Anh ở trường tăng đáng kể!"</p>
                        <p style="font-size:.8rem;font-weight:700;color:#22C55E">— Chị Hương, phụ huynh lớp 3</p>
                    </div>
                    <div style="background:#F0FDF4;padding:15px;border-radius:14px;border-left:4px solid #22C55E">
                        <p style="font-size:.85rem;color:#555;font-style:italic;margin-bottom:6px">"Giáo trình rất bài bản, con học tự giác mà không cần nhắc. Hệ thống huy chương khiến con rất hào hứng."</p>
                        <p style="font-size:.8rem;font-weight:700;color:#22C55E">— Anh Minh, phụ huynh lớp 5</p>
                    </div>
                    <div style="background:#F0FDF4;padding:15px;border-radius:14px;border-left:4px solid #22C55E">
                        <p style="font-size:.85rem;color:#555;font-style:italic;margin-bottom:6px">"Rất đáng đồng tiền! Con ôn thi vào 10 rất hiệu quả. Feedback giúp con hiểu ngay lỗi sai."</p>
                        <p style="font-size:.8rem;font-weight:700;color:#22C55E">— Chị Lan, phụ huynh lớp 9</p>
                    </div>
                </div>
            </div>`;

        // FAQ
        html += `
            <div style="background:#fff;border-radius:20px;padding:25px;box-shadow:0 4px 15px rgba(0,0,0,.08);margin-bottom:20px">
                <h3 style="font-family:'Fredoka One',cursive;margin-bottom:15px;color:#6366F1;text-align:center">❓ Câu hỏi thường gặp</h3>
                <div style="display:flex;flex-direction:column;gap:10px">
                    <div style="background:#f8f8f8;padding:14px;border-radius:12px">
                        <div style="font-weight:800;font-size:.9rem;color:#333;margin-bottom:4px">Dùng thử có mất phí không?</div>
                        <div style="font-size:.85rem;color:#666">Hoàn toàn miễn phí trong 7 ngày. Không cần thẻ tín dụng, không tự động trừ tiền.</div>
                    </div>
                    <div style="background:#f8f8f8;padding:14px;border-radius:12px">
                        <div style="font-weight:800;font-size:.9rem;color:#333;margin-bottom:4px">Con tôi có thể học trên điện thoại không?</div>
                        <div style="font-size:.85rem;color:#666">Có! Ứng dụng hoạt động trên mọi thiết bị: điện thoại, máy tính bảng, laptop.</div>
                    </div>
                    <div style="background:#f8f8f8;padding:14px;border-radius:12px">
                        <div style="font-weight:800;font-size:.9rem;color:#333;margin-bottom:4px">Tôi có thể hủy bất kỳ lúc nào không?</div>
                        <div style="font-size:.85rem;color:#666">Có. Bạn có thể hủy gói bất kỳ lúc nào. Không có phí ẩn hay ràng buộc.</div>
                    </div>
                </div>
            </div>`;

        // Payment methods
        html += `
            <div style="background:#fff;border-radius:20px;padding:25px;box-shadow:0 4px 15px rgba(0,0,0,.08);margin-bottom:20px">
                <h3 style="font-family:'Fredoka One',cursive;margin-bottom:15px;color:#6366F1;text-align:center">💳 Phương thức thanh toán</h3>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px">
                    <div style="background:#f8f8f8;padding:15px;border-radius:14px;text-align:center">
                        <div style="font-size:2rem;margin-bottom:5px">📱</div>
                        <strong>Momo</strong>
                        <p style="font-size:.8rem;color:#888;margin-top:4px">Quét QR / Chuyển khoản</p>
                    </div>
                    <div style="background:#f8f8f8;padding:15px;border-radius:14px;text-align:center">
                        <div style="font-size:2rem;margin-bottom:5px">🏦</div>
                        <strong>VNPay</strong>
                        <p style="font-size:.8rem;color:#888;margin-top:4px">Thẻ ngân hàng</p>
                    </div>
                    <div style="background:#f8f8f8;padding:15px;border-radius:14px;text-align:center">
                        <div style="font-size:2rem;margin-bottom:5px">💰</div>
                        <strong>Chuyển khoản</strong>
                        <p style="font-size:.8rem;color:#888;margin-top:4px">Ngân hàng trực tiếp</p>
                    </div>
                </div>
            </div>

            <!-- Final CTA -->
            <div style="text-align:center;padding:20px;background:linear-gradient(135deg,#A855F7,#6366F1);border-radius:20px;color:#fff;margin-bottom:20px">
                <div style="font-family:'Fredoka One',cursive;font-size:1.3rem;margin-bottom:8px">Bắt đầu hành trình tiếng Anh cho con ngay hôm nay!</div>
                ${trialAvail && current === 'free' && !trialActive ?
                    `<button onclick="Subscription.activateTrial()" style="background:#fff;color:#A855F7;border:none;padding:14px 35px;border-radius:14px;font-size:1.1rem;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;margin-top:8px;box-shadow:0 4px 15px rgba(0,0,0,.15)">
                        🎁 Dùng thử MIỄN PHÍ 7 ngày
                    </button>` :
                    `<button onclick="goHome()" style="background:#fff;color:#A855F7;border:none;padding:14px 35px;border-radius:14px;font-size:1.1rem;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;margin-top:8px">
                        📚 Tiếp tục học
                    </button>`
                }
            </div>
        `;

        document.getElementById('subscriptionContent').innerHTML = html;
    },

    showPayment(planId) {
        const plan = this.plans.find(p => p.id === planId);
        if (!plan) return;

        document.getElementById('subscriptionContent').innerHTML = `
            <div style="max-width:500px;margin:0 auto">
                <div style="background:#fff;border-radius:20px;padding:30px;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.1)">
                    <div style="font-size:3rem;margin-bottom:10px">${plan.icon}</div>
                    <h3 style="font-family:'Fredoka One',cursive;color:${plan.color};margin-bottom:5px">${plan.name}</h3>
                    <div style="font-family:'Fredoka One',cursive;font-size:2rem;margin-bottom:5px">${plan.priceLabel}</div>
                    <p style="color:#888;font-size:.85rem;margin-bottom:20px">Kích hoạt trong vòng 24 giờ sau thanh toán</p>

                    <div style="background:linear-gradient(135deg,#F3E8FF,#EDE9FE);border-radius:14px;padding:20px;margin-bottom:15px;text-align:left">
                        <h4 style="margin-bottom:10px;color:#7C3AED">📱 Thanh toán qua Momo:</h4>
                        <p style="font-size:.9rem;color:#555;margin-bottom:4px">1. Mở app <strong>Momo</strong></p>
                        <p style="font-size:.9rem;color:#555;margin-bottom:4px">2. Chuyển tiền đến: <strong style="color:#7C3AED">0xxx xxx xxx</strong></p>
                        <p style="font-size:.9rem;color:#555;margin-bottom:4px">3. Số tiền: <strong style="color:#7C3AED">${plan.price.toLocaleString('vi-VN')}đ</strong></p>
                        <p style="font-size:.9rem;color:#555">4. Nội dung: <strong style="color:#7C3AED">FEK-${Auth.currentUser?.uid?.slice(0,8) || 'OFFLINE'}-${planId.toUpperCase()}</strong></p>
                    </div>

                    <div style="background:#F0FDF4;border:2px solid #22C55E;border-radius:14px;padding:15px;margin-bottom:15px">
                        <p style="font-size:.85rem;color:#15803D;font-weight:700">✅ Sau khi thanh toán, tài khoản sẽ được kích hoạt trong vòng 24 giờ.</p>
                        <p style="font-size:.8rem;color:#22C55E;margin-top:4px">Liên hệ Zalo: 0xxx.xxx.xxx nếu cần hỗ trợ</p>
                    </div>

                    <div style="background:#FEF3C7;border-radius:14px;padding:12px;margin-bottom:20px">
                        <p style="font-size:.8rem;color:#92400E">🔒 Thanh toán an toàn • Hoàn tiền trong 7 ngày nếu không hài lòng</p>
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
