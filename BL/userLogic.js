const userController = require('../DL/controller/userController')
const jwtFn = require('../middlewere/jwt')
const bcrypt = require('bcrypt')

async function login(loginData){
  const email = loginData.email;
  const user = await userController.readOne({email: email})
if (!user) throw({code:401, message:"not exist"})
if (user.email !== email) throw({code:401, message:"unauthorized"})

const token = jwtFn.createToken(user._id)
return {token:token , name:user.firstName }
}


module.exports = {login}



// exports.createUser = (userFields) => {
//     if(userFields.length===0) throw ({code:400, message:"there is no user fields"})
//       userController.create(userFields)
// }

module.exports.updateUser = async (filter,newData) => {
    if(!newData){    throw ({code:400, message:"there is no new data"})}
   const  email = filter;
    const user = await userController.readOne({email:email})
    const newTodos ={todos: [...user.todos, newData]}
     await userController.update({email:email},newTodos);
     return await userController.readOne({email:email})
}
module.exports.deltodo = async (filter,newData) => {
    if(!newData){    throw ({code:400, message:"there is no new data"})}
   const  email = filter;
    const user = await userController.readOne({email:email})
    const newTodos ={todos: [...user.todos, newData]}
     await userController.update({email:email},newTodos);
     return await userController.readOne({email:email})
}


module.exports.register = async (userFields)=> {
  const { email, password, firstName, lastName } = userFields

  if (!email || !password || !firstName || !lastName)
    throw ({ code: 400, message: "missing data" })

  const existUser = await userController.readOne({ email })
  if (existUser)
   throw ({ code: 405, message: "duplicated email" })
   



  const user = await userController.create(userFields)
  console.log("user:", user);
  const token = jwtFn.createToken(user._id)
  console.log("token1:", token);
  return {token:token , user :user.firstName} 
}
















// }

// async function register() {
    //     // many many many validations
    
    // }
    
    // async function getUserDetailsById(id) {
        
        //     await userController.create({ email: "Yon@walla.com" })
        
        // find
        // check if null or exist
        //   error / user {}
// let user1 = {
//     firstName: "Yonatan",
//     lastName: "Ramon",
//     email: "Yokon@walla.com",
//     password: "987865",
//     address: {
//         street: 12,
//         homeNum: 34,
//         city: "jerusalem",
//     },
//     gender: 'male'
// }

// create(user1)
