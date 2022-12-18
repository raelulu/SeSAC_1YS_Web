var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);

router.get("/signup", controller.signup);
router.post("/signup", controller.signupPost);

router.get("/login", controller.login);
router.post("/login", controller.loginChk);

module.exports= router;