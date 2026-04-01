// ============================================
// FIREBASE CONFIGURATION
// Thay thế bằng config Firebase project của bạn
// Tạo project tại: https://console.firebase.google.com
// ============================================
const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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
