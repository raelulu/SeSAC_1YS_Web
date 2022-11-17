let list = ['apple','banana'];
[item1, item2]= list;//배엷분해해서 하고있는거.. 
//let item1 =list[0];
//let item2 =list[1];
//let item3 =list[2];

/* console.log(item1);
console.log(item2); */
[item1, item2= 'peach', item3='orange']= list;
console.log(item1);
console.log(item2);
console.log(item3);//구조분해하면서 이값이 없을때 대체할수있음. 배열구조분해!

let x = 1;
let y = 3;

let temp =x;
x =y;
y = temp;

[y,x] = [x,y]
//[1,3]을 구조분해해서
//[a,b] =[1,3] 배열구조로 값바꾸는걸 쉽게 할수있다...


//중요한거는 객체구조분해...ㅎㅎ

let obj ={
    a: 'one',
    b: 'two',
    e: '1',
    f: '2'
}
//let key1= obj,key1;이렇게 썼었죵..
let { b: key1, a, c= 'three'} = obj;//b에 콜론해서 key1으로 변수이름 바꿔줌. 콜론이용해서!!
console.log(a);
console.log(key1);
console.log(c);
//키값을 이름으로 찾기때문에 순서틀려도 상관없음 a.b라는 키값으로 찾고, 배열구조분해! 배열은 인덱스중요하니 순서지켜줘야


//전개 연산자????????
let { b, ...rest} =obj; //...이 전개연산자. 나머지를 다 가져오는것 배열이나 객체를 전개해서 가져오는...
console.log(b);
console.log(rest);//나머지 전부 전개해서 가쟈온다공..?  ...하면 나머지친구들이 들어온다 생각하기!!
//구조분해할때 전개연산자는 마지막에 들어가야함. 추출하고 나머지들이니까....

//클래스 객체생성하는거다. 클래스 다시복습하기!
