let typeSpecie = ['Alien', 'Animal', 'Cronenberg', 'Disease', 'Human', 'Humanoid', 'Mythological Creature', 'Poopybutthole', 'Robot', 'unknown' ].map((el,ix)=>{return {id:ix+1,name:el}})
let typeGender =  ['Female', 'Genderless', 'Male', 'unknown' ].map((el,ix)=>{return {id:ix+1,name:el}})
let typeStatus =  ['Alive','unknown','Dead',].map((el,ix)=>{return {id:ix+1,name:el}})
let typeUsers =   [
  {
    user: 'CarlosCo_dev26',
    password: 'CarlosCo_dev27',
    favorites: '1,5,10,15,20,25,200,201,203,500,522'
  },
  {
    user: 'Jose@el_terrible21',
    password: 'Jose@el_terrible22',
    favorites: '2,6,11,16,21,26,300,301,303,600,622'
  },
  {
    user: 'Nati_tuTerror21',
    password: 'Nati_tuTerror22',
    favorites: '3,7,12,17,22,27,400,401,403,700,722'
  }
]

module.exports = {
  typeGender,
  typeSpecie,
  typeStatus,
  typeUsers
}
