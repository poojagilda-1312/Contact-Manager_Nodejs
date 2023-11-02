// import mongoose from "mongoose";
// //schema
// const userschema  = new mongoose.schema({
   
//     email :{
//         type :String ,
//         required: true,
//         trim : true,
//         unique : true
//     },
//     password :{
//         type :String ,
//         required: true,
    
//     }
// })
// const UserModel =  mongoose.model('user',userschema);
//    export default UserModel
const mongoose = require("mongoose")

// Defining Schema
const userSchema =  mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  tc: { type: Boolean, required: true }
})

// Model
module.exports=  mongoose.model("user", userSchema)

