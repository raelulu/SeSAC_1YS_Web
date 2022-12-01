const Test = require("../model/Test");
//test.js를 모듈로 읽어오겠다는 의미
exports.main = (req, res) => {
    let hi = Test.hello(); //함수호출. hello라는 문자열이 여기서 hi 에 담김
    res.render(index)
    //res.render("index");
}
exports.test = (req, res) => {
    res.send("test");
}
exports.post = (req, res) => {
    res.send("test");
}
exports.post = (req, res) => {
    res.render("practice1");
}
exports.good = (req, res) => {
    let infom = Test.login();
    if ( req.body.id == infom.id && req.body.pw == infom.pw ){
        res.send("<p style='color:blue'>로그인 성공</p>");
    } else {
        res.send("<p style='color:red;'>로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)");
    }
}
//module.exports = {
//    main: main,
//    test: test,
//    post: post
//}