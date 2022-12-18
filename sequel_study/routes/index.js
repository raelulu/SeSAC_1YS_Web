var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);

router.get("/signup", controller.signup);
router.post("/signup", controller.signupPost);


module.exports= router;