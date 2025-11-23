   // server.js
const express = require('express');        // Express import karo
const apiRoutes = require('./api/index');  // API module import

const app = express();                     // <-- app define kar diya

app.use(express.json());                   // JSON request support
app.use('/api', apiRoutes);               // API routes

// Test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
