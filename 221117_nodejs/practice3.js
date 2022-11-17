// function call(name) {
//     setTimeout( () => {      
//         console.log("사용자는 " + name);
//     }, );
    
//     return "call";
// }
// function back() {
//     return "back";
// }
// function hell() {
//     return "hell";
// }

// let a = call('kim');
// console.log( "시작은 " + a);
// let b = back();
// console.log( "두번째는 " + b );
// let c = hell();
// console.log( "세번째는 " + c);


console.log( "사용자는 kim")
setTimeout(call, 2000);


function call(){
    console.log( "시작은 call");
    setTimeout(back,1000);
}
function back(){
    console.log( "두번째는 back");
    setTimeout(hell, 1500);

}
function hell(){
    console.log( "세번째는 hell");
    
}







// setTimout(function(){
//     console.log( "시작은 call");
//     setTimout(function(){
//         console.log( "두번째는 back");
//         setTimout(function(){
//             console.log( "세번째는 hell");
//         },1500);
//     },1000);
// },2000);