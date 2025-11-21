// downloads.js
// Browser Downloads API

module.exports = {
  listDownloads: (req, res) => {
    res.json({
      status: "ok",
      downloads: [
        { id: 1, file: "setup.exe", status: "completed" },
        { id: 2, file: "video.mp4", status: "downloading" }
      ]
    });
  },

  pauseDownload: (req, res) => {
    res.json({ status: "ok", message: "Download paused" });
  },

  resumeDownload: (req, res) => {
    res.json({ status: "ok", message: "Download resumed" });
  },

  cancelDownload: (req, res) => {
    res.json({ status: "ok", message: "Download canceled" });
  }
};
