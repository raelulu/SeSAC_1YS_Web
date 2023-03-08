//1.변수명선언 = nodemailer불러오기
const nodemailer = require("nodemailer");
//3.(관리자급의)계정정보
const email = {
  host: "smtp.mailtrap.io",
  port: 개인,
  auth: {
    user: "개인",
    pass: "개인",
  },
};
//2.(메일전송을 위한 smtp필요, 관리자급의 계정정보필요)
const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    //4.콜백함수, 에러났을시
    if (error) {
      console.log(error);
      //에러안났을시
    } else {
      console.log(info);
      return info.response;
    }
  });
};
//5.옵션 선언
let email_data = {
  from: "raelulu23@gmail.com",
  to: "raelulu23@gmail.com",
  //메일제목
  subject: "테스트 메일입니다. node js공부중 ",
  text: "node js email test입니다.",
};
//6.메일보낸다
send(email_data);
