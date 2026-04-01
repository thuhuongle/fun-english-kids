// ============================================
// AUTHENTICATION MODULE
// Đăng nhập Google, quản lý user roles
// ============================================
const Auth = {
    currentUser: null,
    userProfile: null,

    init() {
        if (!firebaseReady) {
            // Offline mode - skip auth
            Auth.showApp('student');
            return;
        }
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                Auth.currentUser = user;
                await Auth.loadProfile(user.uid);
                if (Auth.userProfile) {
                    Auth.showApp(Auth.userProfile.role);
                } else {
                    Auth.showRoleSelect();
                }
            } else {
                Auth.showLoginScreen();
            }
        });
    },

    async loginGoogle() {
        if (!firebaseReady) { Auth.showApp('student'); return; }
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
        } catch (e) {
            console.error('Lỗi đăng nhập:', e);
            alert('Không thể đăng nhập. Vui lòng thử lại.');
        }
    },

    async loginOffline() {
        Auth.showApp('student');
    },

    async logout() {
        if (firebaseReady) await firebase.auth().signOut();
        Auth.currentUser = null;
        Auth.userProfile = null;
        Auth.showLoginScreen();
    },

    async loadProfile(uid) {
        if (!firebaseReady) return;
        try {
            const doc = await firebase.firestore().collection('users').doc(uid).get();
            if (doc.exists) Auth.userProfile = doc.data();
        } catch (e) { console.error('Lỗi load profile:', e); }
    },

    async saveProfile(data) {
        if (!firebaseReady || !Auth.currentUser) return;
        try {
            await firebase.firestore().collection('users').doc(Auth.currentUser.uid).set(data, { merge: true });
            Auth.userProfile = { ...Auth.userProfile, ...data };
        } catch (e) { console.error('Lỗi save profile:', e); }
    },

    async selectRole(role) {
        const code = Math.random().toString(36).substr(2, 6).toUpperCase();
        const profile = {
            displayName: Auth.currentUser.displayName || '',
            email: Auth.currentUser.email || '',
            role: role,
            studentCode: role === 'student' ? code : '',
            linkedStudents: [],
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            grade: 1,
        };
        await Auth.saveProfile(profile);
        Auth.showApp(role);
    },

    async linkStudent(code) {
        if (!firebaseReady || !Auth.currentUser) return false;
        try {
            const q = await firebase.firestore().collection('users')
                .where('studentCode', '==', code.toUpperCase())
                .where('role', '==', 'student')
                .limit(1).get();
            if (q.empty) return false;
            const studentDoc = q.docs[0];
            const linked = Auth.userProfile.linkedStudents || [];
            if (!linked.includes(studentDoc.id)) {
                linked.push(studentDoc.id);
                await Auth.saveProfile({ linkedStudents: linked });
            }
            return true;
        } catch (e) { console.error('Lỗi liên kết:', e); return false; }
    },

    showLoginScreen() {
        document.querySelectorAll('.app-section').forEach(s => s.style.display = 'none');
        document.getElementById('loginScreen').style.display = 'block';
    },

    showRoleSelect() {
        document.querySelectorAll('.app-section').forEach(s => s.style.display = 'none');
        document.getElementById('roleSelectScreen').style.display = 'block';
    },

    showApp(role) {
        document.querySelectorAll('.app-section').forEach(s => s.style.display = 'none');
        if (role === 'parent') {
            document.getElementById('parentApp').style.display = 'block';
            ParentDashboard.init();
        } else {
            document.getElementById('studentApp').style.display = 'block';
            // Load state and start app
            if (Auth.currentUser && Auth.userProfile) {
                state.studentName = Auth.userProfile.displayName;
            }
            loadState();
        }
    }
};
