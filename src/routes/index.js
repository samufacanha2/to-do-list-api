const express = require("express");

const router = express.Router();

router.use("", require("./taskRouter"));

module.exports = router;
