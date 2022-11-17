const Car = require("./07-class.js")
console.log(Car);

var car1 = new Car("red");
console.log(car1.returnColor());
var car2 = new Car("blue");
console.log(car2.returnColor());
var car3 = new Car("yellow");
console.log(car3.returnColor());

// new car한다는거는 constructor함수가 생성된다...
//그리고 받는다면 보내주셔야한다... ()안에 색깔넣어사..