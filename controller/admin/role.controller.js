const Product=require("../../models/role.model.js");
const systemConfig=require("../../config/system.js");
const Role=require("../../models/role.model.js");
module.exports.index=async (req,res)=>{
    const record=await Role.find({});
    res.render("adimn/page/role/index.pug",{
        records:record
    });
}
module.exports.create=async (req,res)=>{
    const record=await Role.find({});
    res.render("adimn/page/role/create.pug",{
        records:record
    });
}
module.exports.createPost=async (req,res)=>{
    const record=new Role(req.body);
    await record.save();
    res.redirect("back");
}

module.exports.permission=async (req,res)=>{
    let find={

    }
    const record=await Role.find(find);
    res.render("adimn/page/role/permission",{
        records:record
    });
}
module.exports.permissionPatch=async (req,res)=>{
    const per=JSON.parse(req.body.permission);
    for(const item of per){
        await Role.updateOne({_id:item.id},{permission:item.permission});
    }
    res.redirect("back");
}

