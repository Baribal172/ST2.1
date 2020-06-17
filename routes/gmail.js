const express = require('express')
const router = express.Router();
const gmailController = require("../controllers/gmail");

router.get("/", gmailController.getEmail);
module.exports = router;