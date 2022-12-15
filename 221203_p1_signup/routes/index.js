var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

// 회원가입 렌더
router.get("/user", controller.user);
router.post("/signup", controller.signup);

// 로그인페이지 렌더
router.get("/signin", controller.signin);
router.post("/signin", controller.signinChk);

// 마이페이지(profile) 값 넣어서 보여주기
router.post("/profile", controller.profile);
// profile 수정
router.patch("/profile/edit", controller.edit);

module.exports = router;