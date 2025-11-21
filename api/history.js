// history.js
// Browser History API

module.exports = {
  addHistory: (req, res) => {
    res.json({ status: "ok", message: "History entry added" });
  },

  listHistory: (req, res) => {
    res.json({
      status: "ok",
      history: [
        { id: 1, url: "https://example.com", time: Date.now() },
        { id: 2, url: "https://hindbrowser.com", time: Date.now() }
      ]
    });
  },

  deleteHistory: (req, res) => {
    res.json({ status: "ok", message: "History entry deleted" });
  },

  clearAll: (req, res) => {
    res.json({ status: "ok", message: "All history cleared" });
  }
};
