const generate=require("../func/generate");
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    userId:String,
    cart_id:String,
    fullname:String,
    email:String,
    password:String,
    phone:String,
    avatar: String,
    tokenUser:{
        type:String,
        default: generate.generateRandomString(20)
    },
    status:{
        type:String,
        default: "active"
    }},
    {
        timestamps :true,
    });
const User=mongoose.model("userSchema",userSchema,"User");
module.exports = User;