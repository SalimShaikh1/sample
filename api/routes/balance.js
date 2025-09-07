// routes/book.routes.js
const express = require("express");
const router = express.Router();
const { createBalance } = require("../controllers/balance");

router.get("/", (req, res) => {
    res.status(200).json('Welcome to your Vercel Node.js API! nested file');
});

module.exports = router;