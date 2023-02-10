console.log("HELLO!!!...");
setTimeout(() => {
  console.log("...are you still there?");
}, 3000);

console.log("GOODBYE!!");

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

clearInterval(id);
//위에 clearInterval 실행시키면 콘솔로그가 처리되지않으므로 주석처리해놓겠음
