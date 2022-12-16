//시퀄라이즈를 쓰는 이유는 쿼리문을 안쓰고 자바스크립트를 사용하려.
//근데 index.js는 시퀄라이즈함수 부르는데 쓰고
//user.js 만들어서 테이블을 정의한다. user는 내가 만든 테이블.
//모델의 파일명은 앞글자 대문자로. 헷갈리지않게


const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "user",
        { 
            id: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    },
       {    
        tableName: "user",
        freezeTableName: true,
        timestamps: falseS
       }
    );
};

module.exports = User;