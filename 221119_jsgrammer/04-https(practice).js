const http = require('http');
const fs= require('fs').promises;
const server = http.createServer( function(req,res){//리퀘스트(클라이언트요청) 레스폰드(서버의응답)
    // res.write("<h1>Hello~~!!!!!</h1>");//태그 html 형태로 읽음..
    // res.end("<hr>");
    fs.readFile('./221119_css_p.html')
    .then(function(data){
        res.end(data.toString());
    });
});

// server.on()// on은 이벤트등록함수
// server.listen()//서버를 실행하고 클라이언트를 기다린다.

server.listen(8080, function(){
    console.log('8080번 포트로 실행');
})


//html 파일이 있어야 js 에서 경로를 찾을 수 있어서
//fs.readFile("./https-prachice.html").then(function (data) {