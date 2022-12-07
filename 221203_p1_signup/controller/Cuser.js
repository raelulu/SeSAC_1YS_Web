const User = require("../model/user");

// 회원 등록 폼(회원 가입 폼) 보여주기
exports.user = (req, res) => {
    // Visitor.get_login(function(result){
    //     console.log(result);
    //     res.render("sig", {data: result});
    // })
    res.render("signup");
}

// 회원 등록
exports.signup = (req, res) => {
    User.insert(req.body, ()=>{
        res.send(true);
    })
}

// 로그인(signin)페이지 이동
exports.signin = (req,res) => {
    res.render("signin");
}

// 로그인(sigin)확인 여부
exports.signinChk = (req, res) => {
    User.select(req.body, (result)=> {                                                  
        if(result.length > 0) {
            res.send(true);
        }else {
            res.send(false);
        }
    })
}

//profile 값 표시 및 렌더
exports.profile = (req, res) => {
    console.log(req.body);
    User.selectOne(req.body.id, (result)=>{
        // 1. 로그인 후 profile 페이지 렌더
        // 2. 데이터를 input에 담아서 보여준다.
        res.render("profile", { data : result });
    })
}

// profile 수정
exports.edit = (req,res) => {
    User.update(req.body, ()=>{
        res.send(true);
    })
}

// 스스로 delete 삭제 연습
exports.del = (req,res) => {
    User.delete(req.body, ()=>{
        res.send(true);
    })
}