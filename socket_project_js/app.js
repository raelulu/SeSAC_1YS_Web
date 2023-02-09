//서버를 구동해주는 자바스크립트 파일
const express = require("express")
const app = express();
const path = require("path")
//위에는 서버 명확하게 지정해주기위해 nodejs의 기본 모듈도 불러온다

const http = require("http")
const server = http.createServer(app)
//express로 구현한 app을 담아서 express가 http통해 실현될수있도록.. 노드js이렇게 돌아간다 정도만알아두기
//그다음 아래 app.listen을 server.listen바꾼다.

const socketIO = require("socket.io")
//설치한 socket.io라이브러리불러오고
const io = socketIO(server)
//변수만들어서 소켓아이오에 서버담아주기. 그다음 io.on이런식으로 사용할것...

//순서1번. 화면보여주려면.. html,css,이미지 관리할 src폴더 만들고 시작하기

//console.log(__dirname)
//콘솔찍어보면 dirname이 내가가지고있는 프로젝트폴더를 가리킴을 알수있음

//그리고 서버가 실행이 되면 서버가 보여줄 파일들을 지정해줄수있음.
//아래. static폴더 만들고 "src"으로 이런식으로 지정함.
//위에 서버 명확하게 지정해주기위해 nodejs의 기본 모듈도 불러와서 아래 path명령어쓰면 url만들때 쉽게도와줌
app.use(express.static(path.join(__dirname,"src")))

const PORT = process.env.PORT || 5000;

//connection이 이뤄지면 정보를 socket에 담을꺼고, socket에 담긴정보에 접근해서내용을다루게될것..
io.on("connection",(socket)=>{
    socket.on("chatting",(data)=>{
        console.log(data)
        io.emit("chatting",`그래 반가워 ${data}`)
    })
})

//app.listen(실행할포트,명령)
server.listen(PORT, ()=>console.log(`sever is running ${PORT}`) )
//서버가 실행되면 콘솔이 출력되도록
