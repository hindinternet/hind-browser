// download-manager.js
// Hind Browser Advanced Download Manager

const fs = require('fs');
const path = require('path');

module.exports = {

    downloads: [], // Active downloads list

    // Start a new download
    startDownload: (url, filename) => {
        const filePath = path.join(__dirname, 'downloads', filename);
        // Placeholder logic for download
        const download = {
            url,
            filename,
            filePath,
            status: 'started',
            progress: 0
        };
        module.exports.downloads.push(download);
        console.log(`Download started for ${filename}`);
        return download;
    },

    // Pause a download
    pauseDownload: (filename) => {
        const download = module.exports.downloads.find(d => d.filename === filename);
        if(download) {
            download.status = 'paused';
            console.log(`Download paused for ${filename}`);
        }
        return download;
    },

    // Resume a paused download
    resumeDownload: (filename) => {
        const download = module.exports.downloads.find(d => d.filename === filename);
        if(download && download.status === 'paused') {
            download.status = 'resumed';
            console.log(`Download resumed for ${filename}`);
        }
        return download;
    },

    // Cancel a download
    cancelDownload: (filename) => {
        const index = module.exports.downloads.findIndex(d => d.filename === filename);
        if(index !== -1) {
            const [removed] = module.exports.downloads.splice(index, 1);
            console.log(`Download canceled for ${filename}`);
            return removed;
        }
        return null;
    },

    // Get status of all downloads
    getDownloadStatus: () => {
        return module.exports.downloads.map(d => ({
            filename: d.filename,
            status: d.status,
            progress: d.progress
        }));
    }

};
