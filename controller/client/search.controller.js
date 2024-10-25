const { prefixedAdmin } = require("../../config/system");
const Product=require("../../models/product.model");
module.exports.index=async (req,res)=>{
    const keyword=req.query.keyword

    const regex=new RegExp(keyword,"i");
    const product=await Product.find({
        title: regex
    });
    res.render("client/page/product/index",{
        products:product
    });
}