// api/index.js
const express = require('express');
const app = express();
const balanceRoutes = require("./routes/balance");

app.get('/api', (req, res) => {
    console.log('test test');
    
    res.status(200).json('Welcome to your Vercel Node.js API!');
});

app.use("/api/balance", balanceRoutes);

// Important: Export the Express app for Vercel to use as a serverless function
module.exports = app;