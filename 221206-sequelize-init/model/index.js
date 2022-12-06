const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

//config = {
//            "host": "localhost",
//            "database": "sesac_test",
//            "username": "user",
//            "password": "rhfosla",
//            "dialect": "mysql"
//        }

const db = {};
//시퀄라이즈 모듈은 불러왔고 커넥션 연결하는 코드쓸것./아래 ()안에 인자 4개 넣을것..마지막에는 데이터 전체정보..
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
); 

db.sequelize =sequelize;
db.Sequelize =Sequelize;
//db안이 어떻게 바뀌었다는거?\
//db = {
//    "Sequelize" : Sequelize,
//    "sequelize" : sequelize
// }

//db.Visitor = require("./Visitor")뒤에 ()실행시켜야..
db.Visitor = require("./Visitor")(sequelize,Sequelize);
//sequelize.define 자동완성. sequelize안에 define있는것. 이거 index.js리턴 할때 사용..

// db = {
//     "Sequelize" = Sequelize,
//     "sequelize" = sequelize,
//     "Visitor" = isitor.js에서 return받은 값.
// }
//db를 익스폴츠 할 예정.
module.exports = db;