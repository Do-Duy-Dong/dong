const { prefixedAdmin } = require("../../config/system");
const productCategory=require("../../models/category.model.js");
const Product=require("../../models/product.model.js");

module.exports.index=async (req,res)=>{
    const productFeature= await Product.find({
        feature:"1",
        status:"active"
    }).sort({position:"desc"}).limit(3);
    
    
    res.render("client/page/home/index",{
        pageTitle: "Trang chur",
        productsFeature:productFeature
    });
}