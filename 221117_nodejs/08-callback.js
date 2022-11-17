// function func1(value, call){
//     console.log(value);
//     call();
// }
// func1('a', function(){
//     console.log("1");           //function1이 끝나면 실행!
// });
// function func2(){
//     console.log("2");
// }
// func1(func2);

// console.log("Start");
// function login(id, cb){
//     setTimeout(() => {       //setTimeout은 비동기라서 기다리지않음 . 아무리 리턴해봤자 들어가지않고 리턴안해도 로그인 성공하면 로긴성공이뜨고 피니쉬나와야하는데 순서틀림.
//         console.log('로긴성공');
//         cb(id);
//     }, 2000);
// }
// login('kim',function(id){
// console.log(id + "님 환영합니다.")
// });
// console.log("finish");//비동기를 동기로 만드려고 콜백함수를 쓰는것. 억지로 순서만드는...
//비동기는 복도가 넓어 .. 억지로 정지선 만들어서 한명씩 출발하게 만드는... 순서 억지로 만둘어랑~
//콜백쓰다보면 콜벡지옥에~~ㅎㅎㅎㅌ

function func1(cb){
    console.log("func1");
    cb();
}
function func2(cb){
    console.log("func2");
    cb();
}
function func3(cb){
    console.log("func3");
    cb();
}
func1(function(){
    func2(function(){
        func3(function(){
            console.log("finish");
        })
    })
})