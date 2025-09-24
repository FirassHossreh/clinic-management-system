const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth/login");
const { feed } = require("../controllers/auth/feed");
router.post("/auth/login", login);
router.post("/auth/feed", feed);

module.exports = router;
