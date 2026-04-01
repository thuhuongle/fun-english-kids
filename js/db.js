// ============================================
// DATABASE MODULE - Firestore + localStorage
// Đồng bộ dữ liệu đám mây
// ============================================
const DB = {
    saveTimeout: null,

    // Lưu progress lên cloud (debounced)
    async saveProgress(data) {
        // Luôn lưu localStorage trước (instant)
        localStorage.setItem('funEnglishKidsV4', JSON.stringify(data));

        if (!firebaseReady || !Auth.currentUser) return;

        // Debounce cloud save 1 giây
        clearTimeout(DB.saveTimeout);
        DB.saveTimeout = setTimeout(async () => {
            try {
                const progressRef = firebase.firestore()
                    .collection('progress').doc(Auth.currentUser.uid);
                await progressRef.set({
                    ...data,
                    lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
                    // Không lưu transient state lên cloud
                    currentModule: null,
                    currentIndex: 0,
                    score: 0,
                }, { merge: true });
            } catch (e) { console.error('Lỗi lưu cloud:', e); }
        }, 1000);
    },

    // Load progress từ cloud hoặc localStorage
    async loadProgress() {
        const local = localStorage.getItem('funEnglishKidsV4');
        let localData = local ? JSON.parse(local) : null;

        if (!firebaseReady || !Auth.currentUser) return localData;

        try {
            const doc = await firebase.firestore()
                .collection('progress').doc(Auth.currentUser.uid).get();
            if (doc.exists) {
                const cloudData = doc.data();
                // Ưu tiên cloud nếu có dữ liệu mới hơn
                if (!localData || (cloudData.totalLessonsCompleted || 0) >= (localData.totalLessonsCompleted || 0)) {
                    return cloudData;
                }
            }
        } catch (e) { console.error('Lỗi load cloud:', e); }
        return localData;
    },

    // Load progress của học sinh (cho phụ huynh)
    async loadStudentProgress(studentUid) {
        if (!firebaseReady) return null;
        try {
            const doc = await firebase.firestore()
                .collection('progress').doc(studentUid).get();
            return doc.exists ? doc.data() : null;
        } catch (e) { console.error('Lỗi load student:', e); return null; }
    },

    // Load thông tin học sinh (cho phụ huynh)
    async loadStudentInfo(studentUid) {
        if (!firebaseReady) return null;
        try {
            const doc = await firebase.firestore()
                .collection('users').doc(studentUid).get();
            return doc.exists ? doc.data() : null;
        } catch (e) { console.error('Lỗi load student info:', e); return null; }
    },

    // Kiểm tra subscription
    async getSubscription() {
        if (!firebaseReady || !Auth.currentUser) {
            return { plan: 'free', expiresAt: null };
        }
        try {
            const doc = await firebase.firestore()
                .collection('subscriptions').doc(Auth.currentUser.uid).get();
            if (doc.exists) return doc.data();
        } catch (e) { console.error('Lỗi load subscription:', e); }
        return { plan: 'free', expiresAt: null };
    },

    // Lưu subscription
    async saveSubscription(data) {
        if (!firebaseReady || !Auth.currentUser) return;
        try {
            await firebase.firestore()
                .collection('subscriptions').doc(Auth.currentUser.uid)
                .set(data, { merge: true });
        } catch (e) { console.error('Lỗi save subscription:', e); }
    }
};
