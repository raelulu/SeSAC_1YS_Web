
const fs2 = require("fs").promises;


                 fs2.writeFile("./sesac.txt", "반갑습니다")
                .then(function () {
                    return fs2.readFile("./sesac.txt")
                    .then(function (data) {
                      console.log(data.toString());
                      fs2.copyFile("./sesac.txt", "./sesac2.txt")
                      .then(() => {});
                      fs2.rename("./sesac2.txt", "new.txt")
                      .then(() => {});
                    });
                  });

                
                //html 파일이 있어야 js 에서 경로를 찾을 수 있어서
