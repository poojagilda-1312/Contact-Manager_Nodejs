const mongoose = require("mongoose")
const connectDb = async(DATABASE_URL)=>{
    try{
         const db ={
            dbName : "authuser"
         }
          await  mongoose.connect(DATABASE_URL,db)
           console.log("succesfuly connected...") ;
    }
    catch(error){
console.log( "Eror is ", error);
    }
}
module.exports = connectDb;