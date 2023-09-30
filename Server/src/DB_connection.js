require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DataTypes } = require('sequelize');
const { USER, PASSWORD , HOST , NAME , PORT } = process.env;

const usersFunction = require('./models/users');

const urlDataBase = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${NAME}`;

//logging hace que la consola muestre el codigo sql generado
const configDataBase = {
   logging:false,
   native:false,
};

const dataBase = new Sequelize(urlDataBase,configDataBase);

usersFunction(dataBase);

module.exports = {
   dataBase,
   ...dataBase.models,
};

// const {Statu,Specie,Gender,Location,Character,User} = dataBase.models;

// const statusFunction = require('./models/status');
// const speciesFunction = require('./models/species');
// const genderFunction = require('./models/gender');
// const locationFunction = require('./models/location');
// const charactersFunction = require('./models/characters');

// statusFunction(dataBase);
// speciesFunction(dataBase);
// genderFunction(dataBase);
// locationFunction(dataBase);
// charactersFunction(dataBase);