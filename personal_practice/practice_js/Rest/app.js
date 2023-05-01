// function sum() {
//  console.log(arguments);
//   return arguments.reduce((total, el) => total + el);
// }

// sum(3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 1, 2, 3);

// function sum(...nums) {
//     console.log(nums);
//   return nums.reduce((total, el) => total + el);
// }

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
