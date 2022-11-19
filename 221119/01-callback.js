function func1(callback){
    console.log("func1");
    console.log(callback);
    callback('이름');
}
function func2(name){
    console.log("func2");
    console.log("name:", name);
   
}
func1(func2);

console.log("----------------")

func1(function(name){
    console.log("func2");
    console.log("name:", name);
})
//따로 빼서 넣은것과 바로넣은것 차이....
//작동 방식의 차이일뿐, 동작에는 차이가 없음.

var a =1;