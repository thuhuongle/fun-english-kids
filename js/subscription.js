// ============================================
// SUBSCRIPTION MODULE — DISABLED (no-op stub)
// App is 100% FREE. All functions are stubs that
// grant access and never show pricing/paywalls.
// ============================================

const Subscription = {
    currentPlan: { plan: 'free', expiry: null, activatedAt: null },
    plans: [
        { id: 'free', name: 'Miễn Phí', color: '#22C55E', price: 0, priceLabel: 'Miễn phí 100%' }
    ],

    async load() { /* no-op — always free */ },
    async save() { /* no-op */ },

    isTrialActive() { return false; },
    getTrialDaysLeft() { return 0; },

    // Always grants access — no paywalls
    canAccessGrade(gradeId) { return true; },
    canAccessFeature() { return true; },

    showPaywallCTA() { /* no-op — nothing is locked */ },
    showPostLessonCTA() { /* no-op */ },

    renderPricingPage() {
        // Redirect to home instead of showing pricing
        if (typeof goHome === 'function') {
            goHome();
        } else if (typeof showScreen === 'function') {
            showScreen('homeScreen');
        }
        console.log('[Subscription] App is 100% free — no pricing page.');
    },

    activatePlan() { /* no-op */ },
    cancelPlan() { /* no-op */ }
};

console.log('[Subscription] Module disabled — app is 100% free for all users.');
