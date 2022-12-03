var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();


router.get("/login", controller.login);




module.exports = router;