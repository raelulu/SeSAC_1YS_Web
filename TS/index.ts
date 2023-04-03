import { type } from "os";

let 이름 = "고래";
let 나이 = 10;
//let 출생지역 = "제주";

var 좋아하는거: { song: string; singer: string } = {
  song: "PeacePiece",
  singer: "BillEvans",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let 회원들: (string | number)[] = [1, "2", 3];
let 오브젝트: { data: string | number } = { data: 123 };

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

//함수에 타입지정공부
function sayHi(이름?: string): void {
  if (이름) {
    console.log("안녕하세요 " + 이름);
  } else {
    console.log("이름이 없습니다");
  }
}

function cipers(letter: number | string): number {
  return letter.toString().length;
}

function marriage(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
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

function cleaningFunc(num: (number | string)[]) {
  let cleaningNum: number[] = [];

  num.forEach((num2) => {
    if (typeof num2 === "string") {
      cleaningNum.push(parseFloat(num2));
    } else {
      cleaningNum.push(num2);
    }
  });

  return cleaningNum;
}
//console.log(cleaningFunc([12, "3"]));

function lastSubject(ex: { subject: string | string[] }) {
  if (typeof ex.subject === "string") {
    return ex.subject;
  } else if (Array.isArray(ex.subject)) {
    return ex.subject[ex.subject.length - 1];
  } else {
    return "에러";
  }
}
//console.log(lastSubject({ subject: ["english", "art", "math"] }));

function game(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "바위"];
}

var 자료 = {
  name: "kim",
};
function 내함수(a: "kim") {}

//변수에 타입지정
let 동물: string | number | undefined;
//위처럼 타입이 길고 복잡하면 변수로 빼서 사용한다
type AnimalType = string | number | undefined;
let 동물2: AnimalType;

//readonly로 잠그기
type Birthplace = {
  readonly region: string;
};

let 출생지역: Birthplace = {
  region: "seoul",
};
//출생지역.region = "busan"; //readonly라서 에러남

type Type = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 테스트: Type = {
  size: 10,
  position: [1, 2],
};

type Person = {
  name: string;
  phone: number;
  email: string;
};
type Adult = { minor: boolean };
type User = Person & Adult;
let 사람: User = {
  name: "나나",
  phone: 123,
  email: "nana",
  minor: true,
};

//method안 타입지정
type Member = {
  name: string;
  plusOne: (num: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    // console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

type RemoveType = (x: string) => number;

let removeDash: RemoveType = function (x) {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
};

function newCuRe(a: string, cutZero: CutType, removeDash: RemoveType) {
  let result = cutZero(a);
  let result2 = removeDash(result);
  console.log(result2);
}
newCuRe("010-1111-2222", cutZero, removeDash); //1011112222 출력될것

let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반갑습니다";
} else {
}

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) 링크.href = "https://kakao.com";

let 버튼 = document.getElementById("button");
버튼?.addEventListener("click", function () {
  console.log("안녕");
});

// let 이미지 = document.querySelector("#image");
// if (이미지 instanceof HTMLImageElement) 이미지.src = "new.jpg ";

let 카카오링크 = document.querySelectorAll(".naver");
for (let i = 0; i < 3; i++) {
  let a = 카카오링크[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
}
