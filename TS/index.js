var 이름 = "고래";
var 나이 = 10;
var 출생지역 = "제주";
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
    }
    else {
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
        }
        else {
            cleaningNum.push(num2);
        }
    });
    return cleaningNum;
}
console.log(cleaningFunc([12, "3"]));
function lastSubject(ex) {
    if (typeof ex.subject === "string") {
        return ex.subject;
    }
    else if (Array.isArray(ex.subject)) {
        return ex.subject[ex.subject.length - 1];
    }
    else {
        return "에러";
    }
}
console.log(lastSubject({ subject: ["english", "art", "math"] }));
function game(a) {
    return ["가위", "바위"];
}
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
