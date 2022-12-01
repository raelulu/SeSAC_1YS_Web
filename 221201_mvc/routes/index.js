var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
router.get("/test", controller.test);
router.get("/postForm", controller.post);

module.exports = router;