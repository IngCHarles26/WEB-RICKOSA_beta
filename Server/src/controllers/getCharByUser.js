const axios = require('axios');
const {User} = require('../DB_connection');

const urlCharacter = 'https://rickandmortyapi.com/api/character/';

const getCharByUser = (req,res)=>{
  const {id} = req.params;
  User.findByPk(id)
    .then(rsp=>{
      let {favorites} = rsp;
      let dataUser = [];
      Promise.all(favorites.split(',').map(el=>axios.get(urlCharacter+el)))
        .then(resp=>{
          resp.forEach(el=>{
            let {id,name,status,species,gender,origin,location} = el.data;
            origin = origin.name;
            location = location.name;
            let isFav = true;
            dataUser.push({id,name,status,species,gender,origin,location,isFav})
          })
          res.status(200).json(dataUser)
        })
    })
    .catch(err=> res.status(500).json({message:err.message}));
}

module.exports = getCharByUser;