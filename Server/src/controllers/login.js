const {User} = require('../DB_connection');

const loginUser = async (req,res)=>{
  try{
    const {user,password} = req.query;
    const access = await User.findOne({where:{user,password}});
    res.status(200).json(access ? {access:true,id:access.id} : {access:false,id:null});
  }catch(err){
    res.status(500).json({message:err.message})
  }
}

module.exports = loginUser;