// routes/book.routes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json('Welcome to your Vercel Node.js API! nested file');
});

module.exports = router;