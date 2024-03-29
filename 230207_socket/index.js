const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//클라이언트 소켓이 연결이 되면 콜백 함수가 실행된다.
//socket : 클라이언트 소켓과 연결되고 새로 생성된 소켓이 
//소켓인자(socket)는 서버와 연결되는 새로생성된 소켓이다..
io.on('connection',(socket)=>{
    console.log('Server Socket Connected')

    socket.emit('welcome', {msg :'welcome'})
    //클라이언트에 보내는것.

    socket.on('response', (str)=>{
        console.log(str);
    })

    socket.on('disconnect', ()=>{
        console.log('server socket disconnected')
    })

})

http.listen(8000, () => {
    console.log('Server open : ', 8000);
});
