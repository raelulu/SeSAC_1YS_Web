const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

/* app.use("/public", express.static("static")); */
//express.static사용해서 미들웨어 등록...app.use안에.  ""안은 실제 존재하는 폴더이름.
//클라이언트가 static폴더 접근하기위해 설정해줘야.
//첫번째인자는 가상경로..원하는값넣어.app.use("/", express.static(""));이게  기본구조.""안에 넣어야..
//static이라는 실제 존재하는 폴더에 public경로로 접근할수 있도록 함.
// src="/public/img/cat.jpg"

app.use("/static", express.static("static"));

// app.use(express.static("static"))???

//localhost:8080
app.get('/', (req, res)=>{
    res.send("hello express");
})  //res 서버가 클라이언트측에 보내는 응답.그래서 send라는 메소드를 사용하는것../ req는 클라이언트가 서버측에 보내는 요청.
//localhost:8080 들어가면 hello express나옴.


//localhost:8080/test
app.get('/test', (req, res)=>{
    res.sendFile( __dirname + "/views/index.html");
})
//__dirname: C:/~~~~~/~~~~/221122_express
//파일 고친경우,,, 백엔드측 언어는 껐다 켜야 프론트측은 안그래드됨.

app.use(express.urlencoded({extended: true})); // x-www-urlencoded 데이터해석.
app.use(express.json());// json형태로 받아보겠다...json형태 :딕셔너리형태랑 비슷
//{
//   key:value
//}배운 순서대로 코드논다고 이 두줄 코드 맨아래 놓으면안됨


//localhost:8080/ejs로 접속하겠다..
app.get('/ejs', (req, res)=>{
    res.render( "index" , {
        title: "index 페이지 입니다.",
        data: ["a", "b", "c"]
    });
})//index.ejs안써도 됨. 그냥index만써도 알아서 찾아줌.

app.get("/form",(req, res)=>{
    res.render("form");
 })
 
app.get("/getForm",(req, res)=>{
   console.log(req.query);
   res.send("get 요청 성공!");
})



app.post("/postForm",(req, res)=>{
    console.log(req.body);
    res.render("result", {data: req.body});
 })
 

app.listen( port, ()=>{
    console.log("server open :", port);
})

