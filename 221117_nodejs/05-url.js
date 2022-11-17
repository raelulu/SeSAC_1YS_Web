const url = require("url");
/* var obj = url.parse('https://n.news.naver.com/article/123/0002290713?cds=news_media_pc&type=editn')
console.log(obj); 
console.log(url.format(obj))
console.log(obj.protocol);

var string = new url.URL("https://n.news.naver.com/article/123/0002290713?cds=news_media_pc&type=editn") */
var string = new url.URL("https://n.news.naver.com/article/123/0002290713?cds=news_media_pc&type=editn")
console.log(string.searchParams.getAll('name'));//주소 물음표 뒤에 값 나눠놓는...주소에서 name인 값 가져옴.
console.log(string.searchParams.keys());
string.searchParams.append('age','20');//기존 물을표뒤에 추가 할수있음.
console.log(string.searchParams.getAll('age'));
console.log(string.searchParams.has('age'));