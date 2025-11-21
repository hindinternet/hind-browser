// notification.js
// Hind Browser Notification Service Layer

module.exports = {

  // 1. Show simple notification
  sendNotification: (title, message) => {
    return {
      success: true,
      notification: {
        title: title,
        message: message,
        timestamp: new Date().toISOString(),
      },
    };
  },

  // 2. Show info notification
  sendInfo: (message) => {
    return {
      type: "info",
      message: message,
      timestamp: new Date().toISOString(),
    };
  },

  // 3. Show warning notification
  sendWarning: (message) => {
    return {
      type: "warning",
      message: message,
      timestamp: new Date().toISOString(),
    };
  },

  // 4. Show error notification
  sendError: (message) => {
    return {
      type: "error",
      message: message,
      timestamp: new Date().toISOString(),
    };
  },

  // 5. Notification with action (button click)
  sendActionNotification: (title, message, actionLabel) => {
    return {
      title,
      message,
      action: actionLabel,
      timestamp: new Date().toISOString(),
    };
  },

};
