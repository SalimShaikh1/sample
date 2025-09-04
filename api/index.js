// api/index.js
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.status(200).json('Welcome to your Vercel Node.js API!');
});

// Important: Export the Express app for Vercel to use as a serverless function
module.exports = app;