// routes/book.routes.js
const express = require("express");
const { getBalance } = require("../controllers/balance");
const router = express.Router();

router.get("/", getBalance);

module.exports = router;