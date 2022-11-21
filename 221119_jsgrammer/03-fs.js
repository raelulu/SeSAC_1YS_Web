const fs = require("fs");
fs.readFile("./test.txt", function(err, data){//파일읽는 함수, 첫번째는 파일이름쓰고 두번째 파라미터는 함수를 보내줘야함.
    if (err) throw err;
//에러 쓰로우 던졌들때 와 콘솔로그했을때랑 다름
//쓰로우하면 즉시 시스템이 멈춤. 콘솔찍었을때는  console.log  err멈추지않음..
    console.log("data:", data);
    console.log("data2:", data.toString()); //String(data)이렇게도 가능...

});



const fs2 = require("fs").promises;
fs2.readFile("./test.txt")
    .then((data)=> {
        console.log("promise -data :", data);
    })

fs2.writeFile("./write.txt",'sesac')//첫번째는 파일명.두번째는 내가 놓고싶은거
    .then(function(){
         return fs2.readFile('./write.txt');
    })
    .then(function(data){
        console.log(data.toString());
    });
    //파일만들면 읽고. 읽으면 콘솔로그 찍는다.


fs.writeFile('./write2.txt', 'codingon', function(err){
    if (err) throw err;
    console.log("writFile success!");
    fs.readFile('./write2.tst', function(err, data){
        if (err) throw err;
        console.log("write2File data:", data.toString());
})
});