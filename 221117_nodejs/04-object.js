console.log("__filename :" + __filename);
console.log("__dirname :" + __dirname);

/**
 * process객체 = 현재 실행 중인 노드 프로세스 정보
 * 글로벌에 올라와서 바로바로 사용가능.
 */
 console.log("process.version:", process.version);
 console.log("process.arch:", process.arch);
 console.log("process.platform:", process.platform);
 console.log("process.cpuUsage:", process.cpuUsage());
 //컴터 코어정보...
 
 /**
 * OS 모듈 -운영체제
 * 현재 실행 중인 노드 프로세스 정보
 * 내장모듈이라 가져와서 써야함 os친구를 불러와서
 */
const os =require("os");
console.log("os.type:", os.type());
console.log("os.cpus:", os.cpus());
console.log("os.homedir:", os.homedir());
console.log("os.freemem:", os.freemem());

//내장모듈 하나더보장~
 /**
 * path 모듈 -운영체제
 * 파일경로 편하게..
 */
const path =require("path");
const file = __filename;
console.log("path.extname :", path.extname(file) );
console.log("path.parse :", path.parse(file) );
//parse는 경로명 구분지을수 있는데 이거를 전부다하는데/ 확장자따로 이름따로 루트경로따로 구분지을수있는부분을 구분지어서 보여주는....