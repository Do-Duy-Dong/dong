const { prefixedAdmin } = require("../../config/system.js");
const Acc=require("../../models/account.model.js");
const Role=require("../../models/role.model.js");
module.exports.requireAuth= async (req,res,next)=>{
    if(!req.cookies.token){
        res.redirect(`${prefixedAdmin}/auth/login`)
    }
    else{
        const user=await Acc.findOne({token:req.cookies.token});      
            if(!user){
            res.redirect(`${prefixedAdmin}/auth/login`);
        }
        else{
            const role=await Role.findOne({_id:user.role_id}).select("title permission");
            res.locals.role=role;
            res.locals.user=user;
            next();
        }
        
        
}}