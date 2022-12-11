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

 //21번. req.session라는 공간안에 로그인이 되어있는 사람의 경우는 user라는 키의 그사람의 id를 넣어왔음.
 //그럼 나는 req.session이라는 공간을 보기만하면됨. 그안에 user라는게 있냐없냐. 그럼 여기서 한번 검사.
 //req.session.user의 값이 있는지 없는지 검사. 검사를 한다는것은 if문으로 걸어두겠다는것. 조건검사하겠다.
 //만약 session에 user가 있다면 index에 데이터를 같이보낼것. 어떤데이터? islogin이라는 데이터.
 //이사람이 로그인되어있다하면 true라는 값으로 데이터를 보내주는..
 //로그인이 되어있지않으면 false를 보냄. 이렇게 로그인여부를 검증.
 //검증하면 다음엔 이 데이터를 사용할것. 일단은 여기까지 잘되는지 확인해본다.
 //서버 껐다키면 아까 로그인상태사라져서 서버껐다킬때마다 세션다시 만들어짐.
 //지금은 req.session.user에 undefiened가 뜸. 왜? if문안에 req.session.user넣었을때 false가 되거든? 
 //if문안에 넣었을때 index.ejs가 읽히지않음.<---이부분 이해안감!!!!!!----  else로감..그래서 isLogin: false라는 값을 받아올것.
app.get("/", (req,res)=>{
    console.log(req.session.user); //어떤 상황인지 모르겠다 싶으면 콘솔로 무조건 찍어보기.
    if(req.session.user) res.render("index", {isLogin: true}); //로그인했다 세션저장함 안한건 아무것도 적지않음..
    else res.render("index", {isLogin: false});
});
//22번. 이제 뭘하고싶냐. 만약 서버에서 받아온 islogin변수가 false일 경우 로그인이랑 회원가입 하이퍼링크를 보여주고싶다. 그럼 이제 ejs문법 쓸것. index.ejs이동.
 

const user = {id : "a", pw : "1"};

//아래부터~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~세션과제~~~~~~
//2번. index.ejs를 렌더하는 라우터를 만든다.
//app.get("/"), (req,res)=>{
//    res.render("index");
//}------3번. 여기까지하고 node index.js 서버오픈하면 로그인, 회원가입 뜨는지확인.
//-------4번. 그다음 생각.사용자가 로그인 누르면 로그인페이지가서 로그인할것이다.-> 로그인 하이퍼링크를 누르겠지. 라우터를 만들어줘야. index.js에서 로그인 라우터에 대한작업.
//app.get("/login"), (req,res)=>{ //5번. 여기서 views폴더가서 login.ejs파일을 만든다.
//    res.render("index");
//25번. 로그인성공. 로그인이 되어있을경우에 isLogin: true 뒤에 id라는 값을 하나 더 같이 보낼것.
//id가 담겨있는 곳은 req.session.user// 아래{isLogin: true, id: req.session.user}에서 미리 필요할것 같아 예상해서 담아뒀는데. 나중에 개발하고봤는데 로그인했을경우에 id가 필요하다면 그때가서 담아도 된다. 그때 추가해도된다.
//여기서 이제 뭘할꺼냐. 로그인 성공했을때 이사람정보도 같이 보내주고 있음.
app.get("/", (req,rse)=>{
    console.log(req.session.user);
    if(req.session.user) res.render("index", {isLogin: true, id: req.session.user});
    else res.render("index", {isLogin: false});
})

//16번. 로그인페이지 렌더하는것 만든다.-----여기까지하고 껐다켜서확인->로그인 눌렀을때 로그인페이지로 이동할것..그다음 하고싶은것은 로그인버튼을 눌렀을때 동작하게끔하고싶음.
//로그인버튼 눌렀을때 어떤 동작을 하냐.. 일단 ejs에서 먼저해줘야. 이런 요청보낼꺼다..
//서버에서는 아이디랑 일치하는지 확인을하고, 응답을하면됨.
app.get("/login", (req, res)=>{
    res.render("login");
})
//17번. 일단 app.post라우터 만들꺼고. url을 login하고..if문써서 비교.
//그리고 응답을 보내는데. 로그인 성공했다는 의미로 true를 보낼것.
//그리고 그렇지 않을 경우도 응답을 보내야함. 실패했다는 의미로 false라고 보냄.
//여기까지 그냥 폼전송할때 배웠던것임.그냥 폼전송이든 동적폼전송이든.
//app.post("/login", (req, res)=>{
//    if(req.body.id == user.id && req.body.pw == user.pw) {
//        res.send(true);
//    }else {
//        res.send(false);
//    }
//})

//18번. *이제 session이라는 거를 만들어두고, 웹브라우저에서 session이 있을경우에는 (로그인이 되어있다는것을암시) 로그인이 되어있을때만 필요한 것들을 상황에 따라서 보여주고싶은 그런 기능을 하고싶다.!*
//로그인 성공을하면 req.session이란 공간 안에다가 user라는것을 만들어서 이사람의 id를 저장해 놓을것. 이사람의 아이디는 어디있죠? req.body.id에 있든 user.id에 있든. 둘중에 하나 쓰면 됨. 나는  req.body.id로 씀.
//이사람이 로그인에 성공하면 req.session.즉 클라이언트마다 가지고있는 세션공간에 user라는 키를 만들어서 값을 넣을것. 그사람의 id를.
app.post("/login", (req, res)=>{
    if(req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        res.send(true);
    }else {
        res.send(false);
    }
})
// 19번. ㄴ 그럼 여기까지하면 로그인되는지 한번확인. 조금조금씩 개발한다음 여기까지 잘되나 확인. 통으로 개발하기 어려우니까, 조금 개발하고 확인하고. 조금 개발하고 확인하고.
//그럼 여기까지 개발했을때 어디까지 확인해야할까? 모른채 확인하면 안돼!!
//서버에 응답을 보냈잖아 지금 res.send로, 나는 login.ejs에서 서버의 응답을 받으면 콘솔ㄴ로그를 찍는걸로 확인. 콘솔로 true, false 잘들어오는지 보기!확인!

//20번. 성공이되면 메인페이지로 이동했을때 로그인이랑 회원가입이아니라, '**님환영합니다'랑 '로그아웃(하이퍼링크 또는 버튼)'을 보여주고싶음.
//그럼 페이지 렌더되는 부분이 바뀌어야하는데...그럼 여기서 좀 바뀔게 있겠구나 이때 생각. 이제 보여줄게 회원가입이아니라. 로그인이아니라. 지금 로그아웃버튼을 보여주고싶은것. 여기서그럼 뭘할것? 일단은 여기서 한번 검증이 들어가야. 이사람이 로그인이 되어있는 사람인지아닌지.확인한번해야. 확인어떻게?? 21번으로.

app.get("/logout", (req, res)=>{
    req.session.destroy(function(err){
        if(err) throw err;

        res.redirect("/");
    })
})
//위까지~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~세션과제~~~~~~




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







