"use strict" 
// use strict 통해 자바스크립오류 최대한줄이고
const socket = io();


socket.emit("chatting", "from front")

socket.on("chatting", (data)=>{
    console.log(data)
})

console.log(socket)