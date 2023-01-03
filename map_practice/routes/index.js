var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", controller.main);

router.get("/signup", controller.signup);
router.post("/signup", controller.signupPost);

module.exports = router;
