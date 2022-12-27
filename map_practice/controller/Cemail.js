const nodemailer = require("nodemailer");

exports.email = (req, res) => {
  let email = req.body.email;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "zerowave0000@gmail.com", // gmail 계정 아이디를 입력
      pass: "", // gmail 계정의 비밀번호를 입력
    },
  });

  let mailOptions = {
    from: "zerowave0000@gmail.com", // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: email, // 수신 메일 주소
    subject: "Sending Email using Node.js", // 제목
    text: "That was easy!", // 내용
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("에러");
    } else {
      console.log("Email sent: " + info.response);
      res.send("메일을 확인하세요");
    }
  });
};
