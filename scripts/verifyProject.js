// HIND Browser Project Verifier

const fs = require("fs");

const requiredFolders = [
    "api",
    "assets",
    "backend",
    "config",
    "core-engine",
    "database",
    "frontend",
    "scripts",
    "security",
    "tests"
];

const requiredFrontendFiles = [
    "frontend/index.html",
    "frontend/style.css",
    "frontend/script.js",
    "frontend/client.js"
];

console.log("🔍 Verifying HIND Browser Project Structure...\n");

// Check folders
requiredFolders.forEach(folder => {
    if (fs.existsSync(folder)) {
        console.log("✔ Folder OK:", folder);
    } else {
        console.log("❌ Missing Folder:", folder);
    }
});

// Check files
requiredFrontendFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log("✔ File OK:", file);
    } else {
        console.log("❌ Missing File:", file);
    }
});

console.log("\n🏁 Verification Complete!");

