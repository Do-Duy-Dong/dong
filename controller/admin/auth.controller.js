const { prefixedAdmin } = require("../../config/system.js");
const md5=require("md5");
const Acc=require("../../models/account.model.js");
module.exports.login=async (req,res)=>{
    if(req.cookies.token){
        res.redirect(`${prefixedAdmin}/dashboard`);
    }
    else{
    res.render("adimn/page/auth/index.pug",{
       page:"Dang nhap"
    })
}}
module.exports.loginPost=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const exist= await Acc.findOne({
        email:email
    });
    if(!exist){
        res.redirect(`${prefixedAdmin}/auth/login`);
        console.log("false");
        return;
    }
    if(md5(password)!=exist.password){
        res.redirect(`${prefixedAdmin}/auth/login`);
        return; 
    }
    
    res.cookie("token",exist.token,{
        httpOnly: true
    });
    res.redirect(`${prefixedAdmin}/dashboard`);
    
    
}