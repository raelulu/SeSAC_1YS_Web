// setTimeout(() => {
//   console.log("HELLO!!!");
// }, 3000);

// console.log("HELLO!!!...");
// setTimeout(() => {
//   console.log("...are you still there?");
// }, 3000);

// console.log("GOODBYE!!");

//setInterval
const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

//setInterval을 멈추기위한 clearInterval
clearInterval(id);
