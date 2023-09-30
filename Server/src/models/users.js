
const {DataTypes} = require('sequelize');

const timestamps = false;

module.exports = (dataBase) =>{
  dataBase.define('User',{
    id:{
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user:{
      type: DataTypes.STRING(20),
    },
    password:{
      type: DataTypes.STRING(20),
    },
    favorites:{
      type: DataTypes.STRING(200),
    },
  },
  {timestamps}
  )
};