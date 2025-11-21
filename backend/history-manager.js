// history-manager.js
// Hind Browser - History Manager Service

const fs = require('fs');
const path = require('path');

const historyFile = path.join(__dirname, 'history.json');

// Initialize history file if not exists
if (!fs.existsSync(historyFile)) {
    fs.writeFileSync(historyFile, JSON.stringify([]));
}

const historyManager = {

    // Add a new history entry
    addHistory: (url, title) => {
        const history = JSON.parse(fs.readFileSync(historyFile));
        const timestamp = new Date().toISOString();
        history.push({ url, title, timestamp });
        fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
        return { success: true, message: 'History added', url, title, timestamp };
    },

    // Get all history entries
    getHistory: () => {
        return JSON.parse(fs.readFileSync(historyFile));
    },

    // Clear entire history
    clearHistory: () => {
        fs.writeFileSync(historyFile, JSON.stringify([]));
        return { success: true, message: 'All history cleared' };
    },

    // Search history by keyword
    searchHistory: (keyword) => {
        const history = JSON.parse(fs.readFileSync(historyFile));
        return history.filter(item => item.url.includes(keyword) || item.title.includes(keyword));
    },

    // Get recent n history entries
    getRecent: (n = 10) => {
        const history = JSON.parse(fs.readFileSync(historyFile));
        return history.slice(-n).reverse();
    }
};

module.exports = historyManager;
