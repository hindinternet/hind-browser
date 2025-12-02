const express = require("express");
const app = express();
const apiRoutes = require("./index");

app.use(express.json());

// API Root
app.use("/", apiRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`HIND Browser API running on port ${PORT}`);
});
