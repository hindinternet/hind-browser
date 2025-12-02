/**
 * API Root Router
 * This file connects all API modules together.
 */

const express = require("express");
const router = express.Router();

// ====== IMPORT ALL API MODULES ======
try {
    router.use("/ai", require("./ai/decided"));
} catch (err) {
    console.log("AI Module missing:", err.message);
}

try {
    router.use("/auth", require("./auth"));
} catch (err) {
    console.log("Auth Module missing:", err.message);
}

try {
    router.use("/history", require("./history"));
} catch (err) {
    console.log("History Module missing:", err.message);
}

try {
    router.use("/bookmarks", require("./bookmarks"));
} catch (err) {
    console.log("Bookmarks Module missing:", err.message);
}

try {
    router.use("/downloads", require("./downloads"));
} catch (err) {
    console.log("Downloads Module missing:", err.message);
}

try {
    router.use("/settings", require("./settings"));
} catch (err) {
    console.log("Settings Module missing:", err.message);
}

try {
    router.use("/security", require("./security"));
} catch (err) {
    console.log("Security Module missing:", err.message);
}

try {
    router.use("/voice", require("./voice"));
} catch (err) {
    console.log("Voice Module missing:", err.message);
}

// ====== DEFAULT TEST ROUTE ======
router.get("/", (req, res) => {
    res.json({
        message: "HIND Browser API Running Successfully!",
        status: "ok"
    });
});

// EXPORT
module.exports = router;

