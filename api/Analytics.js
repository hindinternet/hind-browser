// Analytics Module
module.exports = {
    trackEvent: (eventName, data = {}) => {
        console.log(`Event Tracked: ${eventName}`, data);
        return { success: true };
    },

    trackPageView: (pageName) => {
        console.log(`Page Viewed: ${pageName}`);
        return { success: true };
    }
};
