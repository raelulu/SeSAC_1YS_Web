/* 
문법.resolve, reject는 변수명.
new Promise( function(resolve, reject){
resolve: 함수 형태. 성공했을때 실행할 친구
reject: 함수 형태. 실패 또는 에러처리할때 사용되는 친구.
})
 */
function func1(){
    return new Promise (function(resolve, reject){
        resolve("성공");
    })
}
var a = func1();
console.log(a);
func1().then(function(result){
    console.log("result :", result);
})

function func2(){
    return new Promise (function(resolve, reject){
        setTimeout(function(){resolve("성공");},1000);
    });
}

func2().then(function(result){
    console.log("result2 :", result);
    return 'a';
}).then(function(abc){
    console.log("abc:", abc);
})
