module.exports = async (info,model)=>{
  try{
    await model.bulkCreate(info)
  }catch(err){
    console.log({message:err.message})
  }
}
