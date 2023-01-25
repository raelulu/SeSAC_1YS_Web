// console.log("BEFORE CONDITIONAL");
// let random = Math.random();
// if (random < 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
// } else {
//   console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!");
// }
// console.log(random);
/////////////////////////////////////////////
// const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

// if (dayOfWeek === "monday") {
//   console.log("UGHHH I HATE MONDAYS!");
// } else if (dayOfWeek === "saturday") {
//   console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === "friday") {
//   console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK");
// } else {
//   console.log("MEH");
// }
/////////////////////////////////////////////
// 0-5  FREE
// 5-10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR $10

//const age = 83;
//
//if (age < 5) {
//  console.log("You are a baby. You get in for free!");
//} else if (age < 10) {
//  console.log("You are a child. You pay $10");
//} else if (age < 65) {
// console.log("You are an adult. You pay $20");
//} else {
//  console.log("You are a senior. You pay $10");
//}
/////////////////////////////////////////////
const password = prompt("please enter a new password");
//Password must be 6+ characters
if (password.length >= 6) {
  //Password cannot include space
  if (password.indexOf("") === -1) {
    console.log("Valid Password!");
    //이부분 왜 안먹히는지 찾기
  } else {
    console.log("Password cannot conntain spaces!");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}
//비밀번호가 충분히 길 때만 공백여부를 확인하기 위해 실행되고,
//비밀번호가 충분히 길지 안으면 바로 비밀번호가 짧다는 문구 출력.
