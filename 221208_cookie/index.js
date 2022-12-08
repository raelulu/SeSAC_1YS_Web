const e = require("express");
const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(session({
    secret:'1234',//임의의 문자열가지고 여러분이 가진 세션 암호화하겠다.
    resave: false,//다시 저장할꺼냐말꺼냐. 변경사항이 없어도. 모든요청마다 세션의 변경사항있지는 않음...true:모든 요청마다 session에 변화가 없어도, session을 다시 저장함. 대부분 false사용.
    saveUninitialized: '',//초기화되지않은 세션을 저장하냐마냐.. 보통 true로 지정. 초기화되지않아도 모든사람이 서버에 접속하는 순간에 클라이언트에 대한 세션 저장.
    // cookie: { //session id 쿠키에 대한 옵션
    //  httpOnly: true,
    //  maxAge:
    // secure: true 보안서버에서만 작동//''위아래 자유. 써도되고 안써도되고
}));


app.get("/main",(req, res)=>{
    res.render("main");
 });

 app.get("/signin",(req, res)=>{
    res.render("signin");
 });


app.get("/", (req,res)=>{
    if(req.session.user) res.render("index", {islogin: true}) //로그인했다 세션저장함 안한건 아무것도 적지않음..
    else res.render("index", {isLogin: false})
});

const user = {id : "a", pw : "1"};

app.post("/login", (req,res)=>{
    //cookie = {   }처럼 session도 마찬가지.
    //req.session = {   }
   if(req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id ;
        res.send("로그인 성공");
   } 
   else {
         res.send("로그인 실패");
   }
    req.session.user = "id";//req클라이언트 요청에대한것.. /클라이언트마다 고유의 세션아이디가지고있음./클라이언트 타고온다 res쓰면 동작안될것.
    res.send("세션 생성 성공");
})









app.listen(port, () => {
    console.log("server open,", port);
  });







