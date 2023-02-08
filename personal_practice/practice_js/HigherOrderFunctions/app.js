//function callTwice(func) {
//  func();
//  func();
//}
//
//function callTenTimes(f) {
//  for (let i = 0; i < 10; i++) {
//    f();
//  }
//}
//
//function rollDie() {
//  const roll = Math.floor(Math.random() * 6) + 1;
//  console.log(roll);
//}
//
//callTwice(rollDie);

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS, I AM A GOOD FUNCTION!");
      console.log("YOU WIN A MILLION DOLLORS!!");
    };
  } else {
    return function () {
      alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
    };
  }
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

// makeBetweenFunc(5, 10)
//만약 makeBetweenFunc(50,100)을 호출하면 새로운 함수가 만들어지고 그 함수는 값이 50과 100 사이가 맞는지 알려줄 겁니다
// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }
// function isBetween2(num) {
//   return num >= 1 && num <= 10;
// }
