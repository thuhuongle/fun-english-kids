// ============================================
// FIREBASE CONFIGURATION
// Thay thế bằng config Firebase project của bạn
// Tạo project tại: https://console.firebase.google.com
// ============================================
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyASB_suEbNhCpOJxR5_zbn1LmlyyQ4G9Nk",
    authDomain: "fun-english-kids-41608.firebaseapp.com",
    projectId: "fun-english-kids-41608",
    storageBucket: "fun-english-kids-41608.firebasestorage.app",
    messagingSenderId: "440102232936",
    appId: "1:440102232936:web:95f66f84c29e4844d0ecdd"
};

// Kiểm tra Firebase đã load chưa
let firebaseReady = false;

function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.warn('Firebase SDK chưa được load. Chạy ở chế độ offline.');
        return false;
    }
    if (FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
        console.warn('Chưa cấu hình Firebase. Chạy ở chế độ offline.');
        return false;
    }
    try {
        firebase.initializeApp(FIREBASE_CONFIG);
        firebase.firestore().enablePersistence().catch(() => {});
        firebaseReady = true;
        console.log('Firebase đã khởi tạo thành công!');
        return true;
    } catch (e) {
        console.warn('Lỗi khởi tạo Firebase:', e);
        return false;
    }
}
