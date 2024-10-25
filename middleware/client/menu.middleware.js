const productCategory=require("../../models/category.model.js");
const tree=require("../../func/Tree.js");
module.exports.menu= async (req,res,next)=>{
    const record=await productCategory.find({});
    const categoryMenu= tree(record);
    res.locals.categoryMenu=categoryMenu;
    next();
}