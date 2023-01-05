const User = require("../model/user")

//회원가입폼 보여주기
exports.user = (req,res) => {
    res.render("signup");
}

//회원가입
exports.signup = (req,res) => {
    User.insert(req.body, ()=>{
        res.send(true);
    })
}

//로긴페이지 이동
exports.signin = (req,res) => {
    res.render("signin");
}

exports.signinck = (req,res) => {
    User.select(req.body, (result)=> {
        if(result.length > 0 ){
             res.send(true);
        }else {
             res.send(false);
                   }
    })
}

exports.profile = (req,res) => {
    User.selectOne(req.body.id, (result)=>{
        res.render("profile", {data : result});
    })
}

exports.edit = (req,res) => {
    User.update(req.body, ()=> {
        res.send(true);
    })
}

exports.del = (req,res) => {
    User.delete(req.body, ()=>{
        res.send(true);
    })
}