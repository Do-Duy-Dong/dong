const Product=require("../../models/product.model.js");
module.exports.index= async (req,res)=>{
    const product= await Product.find({}).sort({position:"asc"});
    
    res.render("client/page/product/index",{
        pageTitle:"Trang chu Product",
        products: product
    });
};


module.exports.detail= async (req,res)=>{
    try{
    let find={
        deleted: "false",
        slug: req.params.slug,
        status: "active"
    }
    const product=await Product.findOne(find);
    console.log(product);

    res.render("client/page/product/detail",{     
        product:product,
        title: product.title 
    });}
    catch(err){
        res.redirect("/product");
    }
};