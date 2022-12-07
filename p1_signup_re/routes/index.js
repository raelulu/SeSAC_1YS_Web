var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();
//라우터 함수처럼..

//회원가입 렌더
router.get("/user", controller.user);
router.post("/signup", controller.signup);

//로그인페이지 렌더
router.get("/signin", controller.signin);
router.post("/signin", controller.signinck);

//마이페이자
router.post("/profile", controller.profile);
//수정
router.patch("/profile/edit", controller.edit);
//삭제
router.delete("/profile/del", controller.del);


module.exports = router;