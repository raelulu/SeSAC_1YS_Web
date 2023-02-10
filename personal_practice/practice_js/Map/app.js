// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

//for (let el of numbers) {
//  console.log(el);
//}

const movie = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

//'Alien - 90/100'나오게 하고싶음
// movie.forEach(function (movie) {
//   console.log(`${movie.title}- ${movie.score}/100`);
// });

const titles = movie.map(function (movie) {
  return movie.title.toUpperCase();
});
