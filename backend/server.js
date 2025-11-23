// Backend Server
module.exports = {
    start: () => {
        console.log("Backend server started on port 4000");
        return { success: true };
    }
};
const apiRoutes = require("./api/index");
app.use("/api", apiRoutes);
