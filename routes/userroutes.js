const express = require("express")
const router  = express.Router();
const userRoutes =require('../controllers/usercontroller')
console.log("error is here in userroutesjs")
router.post("/register",userRoutes.userRegistration)
module.exports =router;
