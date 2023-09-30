const {User} = require('../DB_connection');
let reg = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){2})\S{14,20}$/
const addUser = async (req,res)=>{
  try{
    let {user,password} = req.query;
    let allUsers = await User.findAll();
    if(!(reg.test(user) && reg.test(password))) return res.status(200).json({message:'Usuario o contraseña invalidos!!'});
    if(allUsers.some(el=>el.user === user)) return res.status(200).json({message:'El usuario ya existe!!'});
    await User.create({user,password})
    res.status(200).json({message:'Usuario creado correctamente!!'})
  }catch(err){
    res.status(500).json(allUsers)
  }
}

module.exports = addUser;
