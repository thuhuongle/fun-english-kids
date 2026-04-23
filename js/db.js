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

        // Debounce cloud save 1 giây
        clearTimeout(DB.saveTimeout);
        DB.saveTimeout = setTimeout(async () => {
            if (!firebaseReady) return;
            const cleanData = {
                ...data,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
                currentModule: null, currentIndex: 0, score: 0,
            };
            try {
                // Save by Google UID if logged in
                if (Auth.currentUser) {
                    await firebase.firestore().collection('progress').doc(Auth.currentUser.uid).set(cleanData, { merge: true });
                }
                // Also save by phone number (for phone-based restore)
                if (data.studentPhone) {
                    await firebase.firestore().collection('progress_phone').doc(data.studentPhone).set(cleanData, { merge: true });
                    // Update user lastActive
                    await firebase.firestore().collection('users_phone').doc(data.studentPhone).set({
                        lastActive: firebase.firestore.FieldValue.serverTimestamp(),
                        grade: data.selectedGrade || 1,
                        totalLessonsCompleted: data.totalLessonsCompleted || 0,
                        level: data.level || 1,
                        wordsCount: (data.wordsLearned || []).length,
                    }, { merge: true });
                }
            } catch (e) { console.error('Lỗi lưu cloud:', e); }
        }, 1000);
    },

    // Load progress từ cloud hoặc localStorage
    async loadProgress() {
        const local = localStorage.getItem('funEnglishKidsV4');
        let localData = local ? JSON.parse(local) : null;

        if (!firebaseReady) return localData;

        try {
            // Try Google UID first
            if (Auth.currentUser) {
                const doc = await firebase.firestore().collection('progress').doc(Auth.currentUser.uid).get();
                if (doc.exists) {
                    const cloudData = doc.data();
                    if (!localData || (cloudData.totalLessonsCompleted || 0) >= (localData.totalLessonsCompleted || 0)) {
                        return cloudData;
                    }
                }
            }
            // Try phone-based lookup
            if (localData && localData.studentPhone) {
                const phoneDoc = await firebase.firestore().collection('progress_phone').doc(localData.studentPhone).get();
                if (phoneDoc.exists) {
                    const phoneData = phoneDoc.data();
                    if (!localData || (phoneData.totalLessonsCompleted || 0) >= (localData.totalLessonsCompleted || 0)) {
                        return phoneData;
                    }
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
