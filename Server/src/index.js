const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index');
const {dataBase} = require('./DB_connection');
const {User} = require('./DB_connection');
const {typeGender,typeSpecie,typeStatus,typeUsers} = require('./utils/typeBasicInfo');
const saveInfoDB = require('./utils/saveInfoInDb');

const morgan = require('morgan');
const save = false;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
});
    
server.use(express.json())
server.use('/rickandmorty',router)

//force que va a borrar todas las tablas de datos y va a crear todo en base a los modelos
dataBase.sync({force:save})
  .then(()=>{
      if(save) saveInfoDB(typeUsers,User);
    })
  .then(()=>{
    server.listen(PORT,()=>{
      console.log('Server raised in port: '+PORT)
    })
  })
  .catch((err)=>console.log(err.message));

module.exports = server;

/*Gender,Specie,Statu,*/
// saveInfoDB(typeSpecie,Specie);
// saveInfoDB(typeGender,Gender);
// saveInfoDB(typeStatus,Statu);