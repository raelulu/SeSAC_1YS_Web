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
