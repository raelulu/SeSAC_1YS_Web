const num = require ('./01_module');
const a = num.a;
const b = num.b;

function add(){
    return a + b;
}
module.exports = add;



//{a:1, b:3}
// const {a,b} = require (./파일) require해서 가져오는거 구조분해...
//a,b 1,3이 되어야함.