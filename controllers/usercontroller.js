const UserModel = require('../models/UserModel');
const bycrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
console.log("error is in controller 11")
// const userRegistration = async(req,res)=>{
//     console.log("hiiiiiiii ")
// }
//     console.log("error is in controller")
// const {email,password} = req.body;
// const user = await UserModel.findOne({email :email})
// if(user){
//     res.send({"status":"failed","message" : "email already registered"})
// }
// else{
//     // if(email && password){
// const salt = await bycrypt.genSalt(12)  
// const hashPassword = await bycrypt.hash(password,salt)

// const data = new UserModel({
//     email :email,
//     password : hashPassword
// })
//     await data.save()
//     res.status(201).send({ "status": "success", "message": "Registration Success"})
// }
// }

// module.exports =   userRegistration