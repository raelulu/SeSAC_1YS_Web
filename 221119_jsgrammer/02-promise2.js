// function login(id, pw, cb) {
//     setTimeout(function () {
//       console.log("사용자입장");
//       cb(id);
//     }, 3000);
//   }
//   function getVideo(id, cb) {
//     setTimeout(function () {
//       console.log(id + "의 비디오 리스트");
//       cb(["아바타", "라라랜드"]);
//     }, 2000);
//   }
//   function getDetail(video, cb) {
//     setTimeout(function () {
//       cb("비디오 제목 : " + video);
//     }, 1000);
//   }
//   login("kim", "1234", function (user) {
//     getVideo(user, function (videos) {
//       console.log("videos:", videos);
//       getDetail(videos[0], function (msg) {
//         console.log(msg);
//       });
//     });
//   });


function login(id, cb){
    return new Promise( function (resolve, reject){
            console.log("사용자입장");
            resolve(id);
        })
    }
function login(id){
        return new Promise( function (resolve){
            console.log("아바타");
            resolve(["아바타"]);
        })
    }
function login(video){
        return new Promise( function (resolve){
            console.log();
             resolve("비디오제목" +video);
         })
    }

login("kim", "1234")
  .then(function(user){
    console.log("user:", user)
    return getVideo(user);
  })
  .then(function(videos){
    console.log("videos:", videos);
   return getDetail(videos[0]);
  })
  .then(function(msg){
    console.log("msg:",msg);
  })

//   getVideo().then()





