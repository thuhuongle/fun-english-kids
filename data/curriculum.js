// ============================================
// HE THONG GIAO TRINH LOP 1-12
// ============================================
const GRADE_INFO = [
    { id: 1, name: 'Lớp 1', age: '6-7 tuổi', desc: 'Làm quen tiếng Anh cơ bản', icon: '🌱', color: '#4ECDC4', free: true },
    { id: 2, name: 'Lớp 2', age: '7-8 tuổi', desc: 'Xây dựng nền tảng vững chắc', icon: '🌿', color: '#22C55E', free: true },
    { id: 3, name: 'Lớp 3', age: '8-9 tuổi', desc: 'Phát triển kỹ năng đọc viết', icon: '🌳', color: '#A855F7', free: true },
    { id: 4, name: 'Lớp 4', age: '9-10 tuổi', desc: 'Mở rộng vốn từ và ngữ pháp', icon: '📗', color: '#6366F1', free: true },
    { id: 5, name: 'Lớp 5', age: '10-11 tuổi', desc: 'Giao tiếp cơ bản hàng ngày', icon: '📘', color: '#0EA5E9', free: true },
    { id: 6, name: 'Lớp 6', age: '11-12 tuổi', desc: 'Tiếng Anh THCS nền tảng', icon: '📙', color: '#F97316', free: true },
    { id: 7, name: 'Lớp 7', age: '12-13 tuổi', desc: 'Ngữ pháp và đọc hiểu', icon: '📕', color: '#EF4444', free: true },
    { id: 8, name: 'Lớp 8', age: '13-14 tuổi', desc: 'Viết đoạn văn và hội thoại', icon: '📓', color: '#EC4899', free: true },
    { id: 9, name: 'Lớp 9', age: '14-15 tuổi', desc: 'Ôn thi vào 10 chuyên sâu', icon: '📔', color: '#8B5CF6', free: true },
    { id: 10, name: 'Lớp 10', age: '15-16 tuổi', desc: 'Tiếng Anh THPT cơ bản', icon: '🎓', color: '#14B8A6', free: true },
    { id: 11, name: 'Lớp 11', age: '16-17 tuổi', desc: 'Chuẩn bị thi THPT QG', icon: '🎯', color: '#F59E0B', free: true },
    { id: 12, name: 'Lớp 12', age: '17-18 tuổi', desc: 'Luyện thi Đại học & IELTS', icon: '🏆', color: '#DC2626', free: true },
];

// Lưu dữ liệu lớp hiện tại (loaded dynamically)
const GRADE_DATA = {};

// Hàm load dữ liệu theo lớp
function loadGradeData(grade) {
    return new Promise((resolve, reject) => {
        if (GRADE_DATA[grade]) { resolve(GRADE_DATA[grade]); return; }
        const script = document.createElement('script');
        script.src = `data/grade${grade}.js`;
        script.onload = () => { resolve(GRADE_DATA[grade]); };
        script.onerror = () => { reject(new Error(`Không tìm thấy giáo trình lớp ${grade}`)); };
        document.head.appendChild(script);
    });
}

// Helper functions
function getVocabForLevel(lv, gradeData) {
    const d = gradeData || GRADE_DATA[window.APP_STATE?.selectedGrade || 1];
    if (!d) return [];
    const w = [];
    Object.values(d.vocab).forEach(t => { if (t.level <= lv) w.push(...t.words); });
    return w;
}
function getVocabForMonth(m, gradeData) {
    const d = gradeData || GRADE_DATA[window.APP_STATE?.selectedGrade || 1];
    if (!d) return [];
    const w = [];
    Object.values(d.vocab).forEach(t => { if (t.month === m) w.push(...t.words); });
    return w;
}
function getTopicsForMonth(m, gradeData) {
    const d = gradeData || GRADE_DATA[window.APP_STATE?.selectedGrade || 1];
    if (!d) return [];
    const topics = [];
    Object.entries(d.vocab).forEach(([key, t]) => { if (t.month === m) topics.push({ key, name: t.name, count: t.words.length }); });
    return topics;
}
function getLevelFromMonth(m) { return m <= 4 ? 1 : m <= 8 ? 2 : 3; }
function getLevelKey(lv) { return lv === 1 ? 'level1' : lv === 2 ? 'level2' : 'level3'; }
