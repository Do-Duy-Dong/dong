const { prefixedAdmin } = require("../../config/system.js");
const Role=require("../../models/role.model.js");
const Acc=require("../../models/account.model.js");
const md5=require("md5");
//$ne:id --not equals id
module.exports.index=async (req,res)=>{
    const record=await Acc.find({});
    for (const item of record) {
        const role=await Role.findOne({
            _id: item.role_id 
        });
        await Acc.updateOne({_id:item._id},{role:role});
    }
    res.render("adimn/page/account/index.pug",{
       records:record
    })
}
module.exports.create=async (req,res)=>{
    const record=await Role.find({});
    res.render("adimn/page/account/create.pug",{
        roles:record
    })
}
module.exports.createPost=async (req,res)=>{
    const emailExist= await Acc.findOne({
        email:req.body.email    
    })
    if(!emailExist){
    req.body.password=md5(req.body.password);
    const record=new Acc(req.body);
    await record.save();
    res.redirect("back");
}}