//const add = function (x, y) {
//  return x + y;
//};
//함수 표현식

const add = (x, y) => {
  return x + y;
};
//화살표함수. 위 함수표현식과 같은함수임.

const square = (x) => {
  return x * x;
};

const rollDie = () => Math.floor(Math.random() * 6) + 1;

const movies = [
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

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movies.score / 10}`;
// });
//위를 화살표함수로 줄이기

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
