const axios = require('axios');
const urlCharacter = 'https://rickandmortyapi.com/api/character/';

const sizeChar = 826;

const getCharById = async (req,res)=>{
  try{
    const {id} = req.params;
    if(0<id && id<=sizeChar){
      const {data} = await axios.get(urlCharacter+id);    
      let {name,status,species,gender,origin,location} = data;
      origin = origin.name;
      location = location.name;
      let isFav = false;
      res.status(200).json({id,name,status,species,gender,origin,location,isFav})
    }else{
      res.status(200).json({message:'Not found'})
    }
  }catch(err){
    res.status(500).json({message:err.message})
  }
}
  
module.exports = getCharById;