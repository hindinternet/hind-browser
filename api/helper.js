// helper.js
// Instant Helper API (For Global Quick-Task System)

module.exports = {
  createTask: (req, res) => {
    res.json({
      status: "ok",
      message: "Task created successfully",
      taskId: Math.floor(Math.random() * 999999)
    });
  },

  findNearbyHelpers: (req, res) => {
    res.json({
      status: "ok",
      helpers: [
        { id: 1, name: "Ravi", distance: "1.2 km" },
        { id: 2, name: "Aman", distance: "2.5 km" }
      ]
    });
  },

  acceptTask: (req, res) => {
    res.json({
      status: "ok",
      message: "Task accepted by helper"
    });
  },

  trackTask: (req, res) => {
    res.json({
      status: "ok",
      statusDetail: "Helper is on the way"
    });
  }
};
