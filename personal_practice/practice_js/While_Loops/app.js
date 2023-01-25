//let count = 0;
//while (count < 10) {
//  count++;
// console.log(count);
//}

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secert code...");
// while (guess !== SECRET) {
//   guess = prompt("enter the secert code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!");

// let input = prompt("Hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input === "stop copying me") break;
// }
// console.log("OK YOU WIN");

//for (let i = 0; i < 100; i++) {
//  console.log(i);
//  if (i === 100) break;
//}

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    //추측값은 문자열일텐데 추측 값과 비교하는 targetNum은 숫자. 두 값이 절대 일치할수 없으므로 parseInt써서 어떤 값을 입력하든 메시지가 파싱되도록
    guess = prompt("Too high! Enter a new guess:");
  } else {
    guess = prompt("Too low! Enter a new guess:");
  }
}
if (guess === "q") {
  console.log("OK, YOU QUIT!");
} else {
  console.log("CONGRATS YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses`);
}
