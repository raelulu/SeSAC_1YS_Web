var express = require("express");
var controller = require("../controller/Clogin");
const router = express.Router();


router.get("/login", controller.login);




module.exports = router;