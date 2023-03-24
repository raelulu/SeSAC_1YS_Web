let 이름 = "고래";
let 나이 = 10;
let 출생지역 = "제주";

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

function cipers(x: number | string): number {
  return x.toString().length;
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
console.log(marriage(100, true, "상"));
