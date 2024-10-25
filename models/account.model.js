const mongoose=require("mongoose");
const generate=require("../func/generate");
const accSchema= mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    phone:String,
    token:{
        type:String,
        default: generate.generateRandomString(20)
    },
    role_id:String,
    status:String,
    avatar:String,
    role:{
        type:Object,
        default: false
    }   
})
const acc=mongoose.model("Acc",accSchema,"account");
module.exports=acc;