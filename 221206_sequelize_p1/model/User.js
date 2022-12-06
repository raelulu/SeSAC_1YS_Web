const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
      "myuser", // create table visitor(
      {
        id: {
          // id int not null primary key auto_increment
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          // name varchar(10) not mull
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        pw: {
          // comment mediumtext
          type: DataTypes.TEXT("medium"),
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      {
        tableName: "myuser", //select * from visitor;
        freezeTableName: true,
        timestamps: false, //default true creatAt modifyAt
        // collate, charset: "UTF8"
      }
    );
  };
  module.exports = User;