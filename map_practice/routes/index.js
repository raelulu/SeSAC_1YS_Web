var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();
const nodemailer = require("nodemailer");
const mailController = require("../controller/Cmail"); // 위의 메일 작성 코드의 파일 경로
router.get("/", controller.main);

router.get("/signup", controller.signup);
router.post("/signup", controller.signupPost);

module.exports = router;
