const express = require("express");
const cookieParser = require("cookie-parser"); // "cookie-parser" 불러오기
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(cookieParser()); //  "cookie-parser" 사용명령어
const option = {
  httpOnly: true, // httpOnly가 true일 경우 브라우저 상에서 밑에 생성한 (app.get) 것을  document.cookies찍어도 보이지 않는다. 자바스크립트 상에서 조작하는 걸 막아 준다.
  maxAge: 30000, // 만들어진 순간부터 여기에 적힌 초만큼(30초) 뒤에 만료가 된다.(ms단위)
  // expires: "2022-12-09T09:00:00" , // GMT 시간 - 2022-12-09T09:00:00 날짜를 적어서 만료일을 정하는 것
  // path: "/visitor", // localhost:8000 < 이 경로에서는 쿠키가 없음, localhost:8000/visitor/~ 그 뒤에 모든 경로에는 쿠키가 있음. default 값은 "/"
  // secure: true , // secure가 true일 경우 https 보안 서버에만 적용됨
  // signed: true // signed가 true일 경우 모든 쿠키 암호화
};


//쿠키 팝업창
app.get("/", (req, res) => {
  //req.cookies.popup 이게 1이 아니면 보여줘야한다.팝업창을. 그 if문을 적는곳.
  //req.cookies.popup 값을 비교해서 1이 아니면... 1이면 "none"
    req.cookies
  if(req.cookies.popup == "1") res.render ("popup", {popup: "none"});
  else res.render("popup", {popup: "block"});
  // res.send("hello");
});
// document.cookies;


app.post("/setpopup", (req, res)=> {
  //1.쿠키를 만든다. 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키생성.-실질적인 서버응답아님. 서버에 들고갈 객체 설정해주는것. res.sen/res.sendfile같은거...
  //{popup : 1}
  res.cookie("popup", "1", option);
  //2.서버 응답
  res.send(req.cookies);
})

app.get("/set", (req, res) => {
   res.cookie("key", "value", option);
   res.send("쿠키생성성공");
});//서버에 보내기 때문에 res객체를 사용. 서버가 클라이언트에게 보내는 요청/

app.get("/get", (req, res) => { 
    console.log(req.cookies);
    console.log(req.cookies.key);
    res.send(req.cookies);
});//클라이언트에서 쿠키를 가져와야 하기 때문에 req객체를 사용. 클라이언트가 서버에게 보내는 요청/((req객체를 통해 쿠키를 서버에 요청))

app.listen(port, () => {
  console.log("server open,", port);
});//서버여는것.