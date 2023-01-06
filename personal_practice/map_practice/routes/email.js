const express = require("express");
const router = express.Router();
const controller = require("../controller/Cemail");

router.post("/nodemailerTest", controller.email);

module.exports = router;
