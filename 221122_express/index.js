const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

/* app.use("/public", express.static("static")); */
//static이라는 실제 존재하는 폴더에 public이라는 경로로 접근할수 있도록 함.
// src="/public/img/cat.jpg"로 html에서 연결해서 사용하는것...

app.use("/static", express.static("static"));
//express안에 static이란 메소드가 있는데, 이 static을 사용해서 미들웨어를 등록하면된다.
//미들웨어 등록하는 코드는 app.use 인데 이폴더를 찾아갈수 있게끔 이 인자 두개를 넘겨주면 됨. app.use안에다가 
//이 뒤에 static안에 쓴("static"). 문자열은 실제로 존재하는 폴더이름.
//static이란 폴더를 만들었고 client가 static이란 폴더에 접근할수있도록하기위해 코드를 작성하는것.
//첫번째꺼는 가상경로. 원하는값 아무거나 써도 됨. 두번째로 들어올 인자는 무조건 express.static()으로 감싼다.

// app.use(express.static("static"))

//localhost:8080
app.get('/', (req, res)=>{
    res.send("hello express");
});  //res 서버가 클라이언트측에 보내는 응답.그래서 send라는 메소드를 사용하는것../ req는 클라이언트가 서버측에 보내는 요청.
//localhost:8080 들어가면 hello express나옴.


//localhost:8080/test
app.get('/test', (req, res)=>{
    res.sendFile( __dirname + "/views/index.html");
});
//__dirname 이걸 사용하면 기본으로 지정되어있는 변수고 여기까지하면 알아서 index.js폴더가 여기 담겨있다 생각하면되고 "/views/index.html"적어주면됨.
// __dirname: C:/~~~~~/~~~~/221122_express
//sendFile 안에 절대경로 넣어야!!
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

