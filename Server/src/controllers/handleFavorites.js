const {User} = require('../DB_connection');

const handleFavorites = async (req,res)=>{
  try{
    const {userId,fav} = req.query;
    let _user = await User.findByPk(userId);
    _user.favorites = fav;
    await _user.save();
    let {user,favorites} = await User.findByPk(userId);
    res.status(200).json({user,favorites})
  }catch(err){
    res.status(500).json({message:err.message})
  }
}

module.exports = handleFavorites;