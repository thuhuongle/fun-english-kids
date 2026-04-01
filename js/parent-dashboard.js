// ============================================
// PARENT DASHBOARD - Theo dõi con học
// ============================================
const ParentDashboard = {
    students: [],

    async init() {
        document.getElementById('parentContent').innerHTML = '<div style="text-align:center;padding:40px;color:#888">Đang tải dữ liệu...</div>';
        await this.loadStudents();
        this.render();
    },

    async loadStudents() {
        this.students = [];
        if (!Auth.userProfile || !Auth.userProfile.linkedStudents) return;

        for (const uid of Auth.userProfile.linkedStudents) {
            const info = await DB.loadStudentInfo(uid);
            const progress = await DB.loadStudentProgress(uid);
            if (info) {
                this.students.push({ uid, info, progress: progress || {} });
            }
        }
    },

    render() {
        const container = document.getElementById('parentContent');
        const parentName = Auth.userProfile?.displayName || Auth.currentUser?.displayName || 'Phụ huynh';

        let studentsHTML = '';
        if (this.students.length === 0) {
            studentsHTML = `
                <div style="text-align:center;padding:40px;background:#fff;border-radius:20px;box-shadow:0 4px 15px rgba(0,0,0,.08)">
                    <div style="font-size:4rem;margin-bottom:15px">👨‍👧‍👦</div>
                    <h3 style="font-family:'Fredoka One',cursive;color:#666;margin-bottom:10px">Chưa liên kết học sinh</h3>
                    <p style="color:#888;margin-bottom:20px">Nhập mã học sinh để theo dõi con em học tập</p>
                    <div style="display:flex;gap:10px;justify-content:center;max-width:350px;margin:0 auto">
                        <input type="text" id="studentCodeInput" placeholder="Nhập mã học sinh..." maxlength="6"
                            style="flex:1;padding:12px;border:3px solid #eee;border-radius:12px;font-size:1rem;text-align:center;font-family:'Nunito',sans-serif;text-transform:uppercase">
                        <button onclick="ParentDashboard.linkStudent()" class="btn-report" style="padding:12px 20px">Liên kết</button>
                    </div>
                    <p id="linkResult" style="margin-top:10px;font-weight:700"></p>
                </div>`;
        } else {
            studentsHTML = this.students.map(s => this.renderStudentCard(s)).join('');
            studentsHTML += `
                <div style="background:#fff;border-radius:16px;padding:20px;margin-top:15px;box-shadow:0 2px 10px rgba(0,0,0,.06)">
                    <h4 style="margin-bottom:10px">Thêm học sinh</h4>
                    <div style="display:flex;gap:10px">
                        <input type="text" id="studentCodeInput" placeholder="Mã học sinh" maxlength="6"
                            style="flex:1;padding:10px;border:2px solid #eee;border-radius:10px;font-size:.95rem;text-transform:uppercase;font-family:'Nunito',sans-serif">
                        <button onclick="ParentDashboard.linkStudent()" class="btn-report" style="padding:10px 16px;font-size:.85rem">Liên kết</button>
                    </div>
                    <p id="linkResult" style="margin-top:8px;font-weight:700;font-size:.9rem"></p>
                </div>`;
        }

        container.innerHTML = `
            <div style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:24px;padding:25px;color:#fff;text-align:center;margin-bottom:20px">
                <div style="font-size:3rem;margin-bottom:8px">👨‍👩‍👧‍👦</div>
                <h2 style="font-family:'Fredoka One',cursive;font-size:1.6rem">Dashboard Phụ Huynh</h2>
                <p style="opacity:.8">Xin chào, ${parentName}</p>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px">
                <h3 style="font-family:'Fredoka One',cursive">📊 Học sinh của bạn (${this.students.length})</h3>
                <button onclick="Auth.logout()" class="btn-report" style="background:linear-gradient(135deg,#888,#aaa);font-size:.8rem;padding:6px 14px">Đăng xuất</button>
            </div>

            ${studentsHTML}
        `;
    },

    renderStudentCard(student) {
        const p = student.progress;
        const totalPct = p.totalQuestionsSeen > 0 ? Math.round((p.totalCorrectAnswers / p.totalQuestionsSeen) * 100) : 0;
        const grade = totalPct >= 90 ? 'A' : totalPct >= 75 ? 'B' : totalPct >= 50 ? 'C' : 'D';
        const gradeColors = { A: '#22C55E', B: '#4ECDC4', C: '#FF8C42', D: '#EF4444' };
        const gradeLabels = { A: 'Xuất sắc', B: 'Giỏi', C: 'Trung bình', D: 'Cần cố gắng' };
        const gradeInfo = GRADE_INFO.find(g => g.id === (p.selectedGrade || 1)) || GRADE_INFO[0];

        const modules = { vocab: 'Từ Vựng', phonics: 'Phát Âm', sentences: 'Đặt Câu', matching: 'Trò Chơi', listening: 'Nghe Hiểu', spelling: 'Đánh Vần' };
        const modColors = { vocab: '#4ECDC4', phonics: '#FF6B9D', sentences: '#A855F7', matching: '#FF8C42', listening: '#22C55E', spelling: '#EF4444' };

        // Tìm điểm yếu
        const modScores = Object.entries(p.moduleProgress || {}).filter(([k]) => modules[k]).sort((a, b) => a[1] - b[1]);
        const weakest = modScores.length > 0 ? modScores[0] : null;
        const strongest = modScores.length > 0 ? modScores[modScores.length - 1] : null;

        return `
        <div style="background:#fff;border-radius:20px;padding:25px;margin-bottom:15px;box-shadow:0 4px 15px rgba(0,0,0,.08)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:15px">
                <div style="display:flex;align-items:center;gap:12px">
                    <div style="width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#4ECDC4,#A855F7);display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:#fff">👶</div>
                    <div>
                        <div style="font-weight:800;font-size:1.1rem">${student.info.displayName || 'Học sinh'}</div>
                        <div style="font-size:.85rem;color:#888">${gradeInfo.icon} ${gradeInfo.name} | Mã: ${student.info.studentCode || '---'}</div>
                    </div>
                </div>
                <div style="text-align:center">
                    <div style="font-family:'Fredoka One',cursive;font-size:2rem;color:${gradeColors[grade]}">${grade}</div>
                    <div style="font-size:.75rem;color:#888">${gradeLabels[grade]}</div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:15px">
                <div style="text-align:center;background:#f8f8f8;padding:10px;border-radius:12px">
                    <div style="font-family:'Fredoka One',cursive;font-size:1.3rem;color:#A855F7">${p.totalLessonsCompleted || 0}</div>
                    <div style="font-size:.7rem;color:#888">Bài học</div>
                </div>
                <div style="text-align:center;background:#f8f8f8;padding:10px;border-radius:12px">
                    <div style="font-family:'Fredoka One',cursive;font-size:1.3rem;color:#22C55E">${totalPct}%</div>
                    <div style="font-size:.7rem;color:#888">Trung bình</div>
                </div>
                <div style="text-align:center;background:#f8f8f8;padding:10px;border-radius:12px">
                    <div style="font-family:'Fredoka One',cursive;font-size:1.3rem;color:#FF8C42">${p.streak || 0}</div>
                    <div style="font-size:.7rem;color:#888">Chuỗi ngày</div>
                </div>
                <div style="text-align:center;background:#f8f8f8;padding:10px;border-radius:12px">
                    <div style="font-family:'Fredoka One',cursive;font-size:1.3rem;color:#FFD700">${p.coins || 0}</div>
                    <div style="font-size:.7rem;color:#888">Sao</div>
                </div>
            </div>

            <h4 style="font-size:.9rem;color:#666;margin-bottom:8px">Tiến độ từng môn:</h4>
            ${Object.entries(modules).map(([k, n]) => {
                const pct = (p.moduleProgress || {})[k] || 0;
                return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">
                    <div style="width:70px;font-size:.8rem;font-weight:600;text-align:right">${n}</div>
                    <div style="flex:1;height:16px;background:#eee;border-radius:8px;overflow:hidden">
                        <div style="height:100%;width:${pct}%;background:${modColors[k]};border-radius:8px;transition:width 1s"></div>
                    </div>
                    <div style="width:35px;font-size:.8rem;font-weight:700">${pct}%</div>
                </div>`;
            }).join('')}

            <div style="display:flex;gap:10px;margin-top:12px">
                ${weakest && weakest[1] < 60 ? `<div style="background:#FEE2E2;padding:8px 14px;border-radius:10px;font-size:.8rem;font-weight:600;color:#EF4444">⚠️ Yếu: ${modules[weakest[0]] || weakest[0]} (${weakest[1]}%)</div>` : ''}
                ${strongest && strongest[1] >= 60 ? `<div style="background:#DCFCE7;padding:8px 14px;border-radius:10px;font-size:.8rem;font-weight:600;color:#22C55E">💪 Mạnh: ${modules[strongest[0]] || strongest[0]} (${strongest[1]}%)</div>` : ''}
            </div>

            ${(p.examHistory || []).length > 0 ? `
                <h4 style="font-size:.9rem;color:#666;margin:12px 0 6px">📋 Bài kiểm tra gần đây:</h4>
                <div style="display:flex;gap:8px;overflow-x:auto">
                    ${(p.examHistory || []).slice(-5).reverse().map(e => `
                        <div style="min-width:80px;text-align:center;background:#f8f8f8;padding:8px;border-radius:10px">
                            <div style="font-size:.7rem;color:#888">${e.date}</div>
                            <div style="font-family:'Fredoka One',cursive;color:${e.percent>=75?'#22C55E':e.percent>=50?'#FF8C42':'#EF4444'}">${e.percent}%</div>
                            <div style="font-size:.7rem;font-weight:700">${e.grade}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>`;
    },

    async linkStudent() {
        const input = document.getElementById('studentCodeInput');
        const result = document.getElementById('linkResult');
        const code = input.value.trim().toUpperCase();
        if (!code || code.length < 4) {
            result.textContent = 'Vui lòng nhập mã học sinh!';
            result.style.color = '#EF4444';
            return;
        }
        result.textContent = 'Đang tìm...';
        result.style.color = '#888';
        const ok = await Auth.linkStudent(code);
        if (ok) {
            result.textContent = 'Liên kết thành công! ✅';
            result.style.color = '#22C55E';
            input.value = '';
            await this.loadStudents();
            this.render();
        } else {
            result.textContent = 'Không tìm thấy mã này!';
            result.style.color = '#EF4444';
        }
    }
};
