const urlCharacter = 'https://rickandmortyapi.com/api/character/';

const getCharByArray = (arrId)=>{
  Promise.all()
}



const getCharByEpisode = (req,res)=>{
  const {id} = req.params;
  axios.get(urlEpisode+id)
    .then(resp=>{
      let {characters} = resp.data;
      let charactersData = [];
      Promise.all(characters.map(el=>axios.get(el)))
        .then(resp=>{
          resp.forEach(el=>{
            let {id,name,status,species,gender,origin,location} = el.data;
            origin = origin.name;
            location = location.name;
            charactersData.push({id,name,status,species,gender,origin,location})
          })
          res.status(200).json(charactersData)
        })
    })
    .catch(err=> res.status(500).json({message:err.message}));
}