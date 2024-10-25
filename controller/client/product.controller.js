const Product=require("../../models/product.model.js");
const { prefixedAdmin } = require("../../config/system");
const productCategory=require("../../models/category.model.js");
const tree=require("../../func/Tree.js");
module.exports.index= async (req,res)=>{
    const newRecord=res.locals.categoryMenu;
    const product= await Product.find({}).sort({position:"asc"});
    res.render("client/page/product/index",{
        pageTitle:"Trang chu Product",
        products: product,
        records:newRecord
    });
};


module.exports.detail= async (req,res)=>{
    
    try{
    let find={
        deleted: "true",
        slug: req.params.slug,
        status: "active"
    }
    const product=await Product.findOne(find);
    console.log(product);
    const newRecord=res.locals.categoryMenu;
    res.render("client/page/product/detail",{     
        product:product,
        title: product.title ,
        records:newRecord
    });}
    catch(err){
        res.redirect("/product");
    }
    
   
    
};

module.exports.category= async (req,res)=>{
//In ra các sản phẩm theo thư mục
    
    // const product=await productCategory.findOne({
    //     slug: req.params.slugCategory
    // })
    // // Tìm sản phẩm con của product
    // const allChild= async (parentId)=>{
    //     const subs= await productCategory.find({
    //         parent_id:parentId
    //     });
    //     let allSub=[...subs];// mảng chứa các phần tử của subs
    //     for(const sub of subs){
    //         const childs=allChild(sub._id);
    //         all.concat(childs);
    //     }
    //     return allSub;
    // }

    // const allCategory= await allChild(product._id);
    // const allCategoryId=allCategory.map(item=>item._id);//Lít chứa các id category

    // const record= await Product.find({
    //     product_category_id:{$in:[product._id,...allCategoryId]}
    // });
    
    res.send("Ok");

}