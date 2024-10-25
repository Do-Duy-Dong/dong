const { prefixedAdmin } = require("../../config/system");
const Product=require("../../models/category.model.js");
const tree=require("../../func/Tree.js");
module.exports.index=async (req,res)=>{
    const record=await Product.find({});
    const newRecord=tree(record);
    res.render("adimn/page/category/index.pug",{
        records:newRecord
    })
}
module.exports.create= async (req,res)=>{
    const record=await Product.find({});
    const newRecord=tree(record);
    
    res.render("adimn/page/category/create.pug",{
        records: newRecord
    });
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
        req.body.thumbnail=`/upload/${req.file.name}`;
    }
    
    const record=new Product(req.body);
    await record.save();
    res.redirect(`${prefixedAdmin}/category`);
}
module.exports.edit=async (req,res)=>{
    const id=req.params.id;
    let find={
        _id: id
    }
    const record= await Product.findOne(find);
    const records=await Product.find({});
    const newRecord=tree(records);
    res.render("adimn/page/category/edit",{
        pageTitle:"Chinh sua san pham",
        record:record,
        records:newRecord
    });
}
module.exports.editPatch=async (req,res)=>{
    console.log(req.body);
    
    req.body.position=parseInt(req.body.position);
    const record=await Product.updateOne({_id:req.params.id},req.body);
    res.redirect("back");
}