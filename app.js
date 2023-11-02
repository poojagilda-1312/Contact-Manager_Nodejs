const express =  require("express")
const  dotenv = require( "dotenv")
const connectDb = require("./config/connection")
dotenv.config()
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL  

// const userRoutes = require('./routes/userroutes')
connectDb(DATABASE_URL)
const app = express();
app.use(express.json())
//  app.use("/api",userRoutes)
// app.use("/api/user", userRoutes)
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
