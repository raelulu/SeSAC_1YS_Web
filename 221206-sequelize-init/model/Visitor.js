//테이블정보자체를 자바스크립언어로 한번 정의해줘야 씨퀄라이즈가..


//비지터함수 만든다음에

const Visitor = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "visitor", //create table visitor (
        {
            id: {// id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allownull: false, 
                primaryKey: true,
                autoIncrement: true
            },
            name : { //name varchar(10) not null
                type: DataTypes.STRING(10),
                allownull: false
            },
            comment: { // comment mediumtext
                type: DataTypes.TEXT('medium')
            }
        },// 중괄호 컬럼정의 끝.
        {  //테이블네임한번더. 그다음 freezeTableName
            tableName: "visitor", //select* fro, visitor하려면 sql만들때 자동으로 visitors로 바꾸는데 복수형태로 안바꾸려는게 아래옵션.
            freezeTableName: true,
            timestamps: false //default값은 true인데 false로..  데이터가 row가 생성, 수정될때마다 타임스탬브찍어서 저장하려들기땜에 false /createAt 저장한시간 modifyat 수정한시작
            // collate, charset : "UTF8" 하기도하는데...애초에 데이터베이스 설정 자체가 인코딩 돼있어서 한글인코딩 테이블로 설정안해줘두됨..
        }
)}

// //씨퀄라이즈 모델 정의하려면
// //Sequelize.define(테이블 이름 설정, 컬럼 정의, 모델옵션 정의); 인자세개!
// // allownull: null허용않겠다
// Sequelize.define(
//     "visitor", //create table visitor (
//     {
//         id: {// id int not null primary key auto_increment
//             type: DataTypes.INTEGER,
//             allownull: false, 
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name : { //name varchar(10) not null
//             type: DataTypes.STRING(10),
//             allownull: false
//         },
//         comment: { // comment mediumtext
//             type: DataTypes.TEXT('medium')
//         }
//     },// 중괄호 컬럼정의 끝.
//     {  //테이블네임한번더. 그다음 freezeTableName
//         tableName: "visitor", //select* fro, visitor하려면 sql만들때 자동으로 visitors로 바꾸는데 복수형태로 안바꾸려는게 아래옵션.
//         freezeTableName: true,
//         timestamp: false //default값은 true인데 false로..  데이터가 row가 생성, 수정될때마다 타임스탬브찍어서 저장하려들기땜에 false /createAt 저장한시간 modifyat 수정한시작
//         // collate, charset : "UTF8" 하기도하는데...애초에 데이터베이스 설정 자체가 인코딩 돼있어서 한글인코딩 테이블로 설정안해줘두됨..
//     }// 모델 옵션도 딕셔너리형태로..

// //정의한거 이제 익스폴츠 할것.

module.exports = Visitor