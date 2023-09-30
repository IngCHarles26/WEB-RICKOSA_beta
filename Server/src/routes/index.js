const router =  require('express').Router();

const loginUser = require('../controllers/login');
const getCharById = require('../controllers/getCharById');
const getCharByEpisode = require('../controllers/getAllCharbyEpisode');
const getCharByUser = require('../controllers/getCharByUser');
const handleFavorites = require('../controllers/handleFavorites');
const addUser = require('../controllers/addUser');

router.get('/login/',loginUser); 
  //http://localhost:3001/rickandmorty/login/
  //params {user,password}              ANS: {access,id}
  router.get('/character/:id',getCharById); 
  //http://localhost:3001/rickandmorty/character/
  //params id                         ANS: {id,name,status,species,gender,origin,location}
  router.get('/characterEpisode/:id',getCharByEpisode);
  //http://localhost:3001/rickandmorty/characterEpisode/2
  //params id                         ANS: [... {id,name,status,species,gender,origin,location}]
  router.get('/characterUser/:id',getCharByUser); 
  //http://localhost:3001/rickandmorty/characterUser/1
  //params id                         ANS: [... {id,name,status,species,gender,origin,location}]
  router.post('/handleFavorites/',handleFavorites);
  //http://localhost:3001/rickandmorty/characterUser/1 
  //query ?userid=..&fav=..,..,..     ANS: {user,favorites}
  router.post('/addUser/',addUser);
  //http://localhost:3001/rickandmorty/addUser/
  //body {user,password}              ANS: {message}

module.exports = router;