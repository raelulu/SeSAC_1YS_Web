var 이름 = "고래";
var 나이 = 10;
//let 출생지역 = "제주";
var 좋아하는거 = {
  song: "PeacePiece",
  singer: "BillEvans",
};
var project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
var 회원들 = [1, "2", 3];
var 오브젝트 = { data: 123 };
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
//함수에 타입지정공부
function sayHi(이름) {
  if (이름) {
    console.log("안녕하세요 " + 이름);
  } else {
    console.log("이름이 없습니다");
  }
}
function cipers(letter) {
  return letter.toString().length;
}
function marriage(money, house, charm) {
  var score = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
// console.log(marriage(100, true, "상"));
function cleaningFunc(num) {
  var cleaningNum = [];
  num.forEach(function (num2) {
    if (typeof num2 === "string") {
      cleaningNum.push(parseFloat(num2));
    } else {
      cleaningNum.push(num2);
    }
  });
  return cleaningNum;
}
//console.log(cleaningFunc([12, "3"]));
function lastSubject(ex) {
  if (typeof ex.subject === "string") {
    return ex.subject;
  } else if (Array.isArray(ex.subject)) {
    return ex.subject[ex.subject.length - 1];
  } else {
    return "에러";
  }
}
//console.log(lastSubject({ subject: ["english", "art", "math"] }));
function game(a) {
  return ["가위", "바위"];
}
var 자료 = {
  name: "kim",
};
function 내함수(a) {}
//변수에 타입지정
var 동물;
var 동물2;
var 출생지역 = {
  region: "seoul",
};
var 테스트 = {
  size: 10,
  position: [1, 2],
};
var 사람 = {
  name: "나나",
  phone: 123,
  email: "nana",
  minor: true,
};
var 회원정보 = {
  name: "kim",
  plusOne: function (x) {
    return x + 1;
  },
  changeName: function () {
    // console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
  var result = x.replace(/^0+/, "");
  return result;
};
var removeDash = function (x) {
  var result = x.replace(/-/g, "");
  return parseFloat(result);
};
function newCuRe(a, cutZero, removeDash) {
  var result = cutZero(a);
  var result2 = removeDash(result);
  console.log(result2);
}
newCuRe("010-1111-2222", cutZero, removeDash); //1011112222 출력될것
var 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반갑습니다";
} else {
}
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) 링크.href = "https://kakao.com";
var 버튼 = document.getElementById("button");
버튼 === null || 버튼 === void 0
  ? void 0
  : 버튼.addEventListener("click", function () {
      console.log("안녕");
    });
// let 이미지 = document.querySelector("#image");
// if (이미지 instanceof HTMLImageElement) 이미지.src = "new.jpg ";
var 카카오링크 = document.querySelectorAll(".naver");
for (var i = 0; i < 3; i++) {
  var a = 카카오링크[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
}

// function 기계(x) {
//   this.q = x;
//   this.w = "snowball";
// }

// var nunu = new 기계("haha");
// var garen = new 기계("kuku");

class Hero {
  constructor(x) {
    this.q = x;
    this.w = "snowball";
  }
}
var nunu = new Hero("wawa");

function 기계() {
  this.q = "strike";
  this.w = "snowball";
}

기계.prototype.name = "kim";

var nana = new 기계();
