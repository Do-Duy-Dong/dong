const { prefixedAdmin } = require("../../config/system");
const Product=require("../../models/category.model.js");
module.exports.index=async (req,res)=>{
    res.render("adimn/page/category/index.pug",{
    })
}
module.exports.create=(req,res)=>{
    res.render("adimn/page/category/create.pug",{});
}
module.exports.createPost=async (req,res)=>{
    if(req.body.position==""){
        const count=await Product.countDocuments({});
        req.body.position=count+1;
    }
    else{
        req.body.position=parseInt(req.body.position);
    }
    if(req.file){
        req.body.thumbnail=`/upload/${req.file.filename}`;
    }
    const record=new Product(req.body);
    await record.save();
    res.redirect(`${prefixedAdmin}/category`);
}