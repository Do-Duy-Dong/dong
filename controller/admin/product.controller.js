const Product=require("../../models/product.model.js");
const filterStatusFunction=require("../../func/filterStatus");
const searchFunction=require("../../func/search.js");
const paginationFunction=require("../../func/pagination.js");
const systemConfig=require("../../config/system.js");
module.exports.index=async (req,res)=>{
    // in ra các nút trạng thái
    const filterStatus=filterStatusFunction(req.query);

    //func tìm kiếm
    let find={
        deleted: "true"
    }
    const objectSearch=searchFunction(req.query);
    if(objectSearch.regex){
        find.title=objectSearch.regex;
    }
    
    
    //Pagination
    const totalProduct= await Product.countDocuments(find);
    let objectPage=paginationFunction(
        req.query,
        {
        currentPage:1,
        limitItem:4
        },
        totalProduct
    );
    let sort={};
    if(req.query.sortKey&&req.query.sortValue){
        sort[req.query.sortKey]=req.query.sortValue;
    }
    else{
        sort.position="asc";
    }  
    console.log(sort);
    const product=await Product.find(find).sort(sort).limit(objectPage.limitItem).skip(objectPage.skip);
    res.render("adimn/page/product/index.pug",{
    pageTitle:"Trang san pham",
    products: product,
    filter: filterStatus,
    keyword:objectSearch.keyword,
    pagination: objectPage
})};    

module.exports.changeStatus=async (req,res)=>{
    const status=req.params.status;
    const id=req.params.id;   
    await Product.updateOne({ _id: id }, {status: status});

    req.flash('info','ALOOOOOOOOOOO');
    res.redirect("back");//vẫn giữ nguyên ở trang hiện tại
} 

module.exports.changeMulti=async (req,res)=>{
    const type=req.body.type;
    const ids=req.body.ids.split(", ");

    switch(type){
        case "active":
            await Product.updateMany({_id: {$in:ids}}, { status : "active"});
            break;
        case "inactive":
            await Product.updateMany({_id: {$in:ids}}, { status : "inactive"});
            break;
        case "delete":
            await Product.updateMany({_id:{$in:ids}},{deleted: "false"});
        case "change-position":
            for(const item of ids){
                let [id, position]=item.split("-");
                position=parseInt(position);
                await Product.updateOne({_id:id},{position: position});
            }
            default:
            break;
    }
    res.redirect("back");
}

module.exports.deleteItem=async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    await Product.updateOne({_id:id},{deleted: "false"});
    res.redirect("back");
}

module.exports.create=async(req,res)=>{
    res.render("adimn/page/product/create",{
        pageTitle: "THem moi san pham"
    });
}

// viet tool tampermonkey
module.exports.createPost=async(req,res)=>{
    // console.log(req.file);
    

    req.body.price=parseInt(req.body.price)
    req.body.discountPercentage=parseInt(req.body.discountPercentage);
    req.body.quantity=parseInt(req.body.quantity);

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
    const product=new Product(req.body);
    await product.save();
    res.redirect(`${systemConfig.prefixedAdmin}/product`);    
}

module.exports.edit=async(req,res)=>{
    
    try {
        const find={
        deleted: "true",
        _id:req.params.id
    }
    const product=await Product.findOne(find);
    res.render("adimn/page/product/edit",{
        pageTitle: "Chinh sua san pham",
        product: product
    });}
    catch(error){
        res.redirect(`${systemConfig.prefixedAdmin}/product`);
    }
}

module.exports.editPatch=async(req,res)=>{
    console.log(req.body);
    req.body.price=parseInt(req.body.price)
    req.body.discountPercentage=parseInt(req.body.discountPercentage);
    req.body.quantity=parseInt(req.body.quantity);
    req.body.position=parseInt(req.body.position);

    if(req.file){
    req.body.thumbnail=`/upload/${req.file.filename}`;
    }
    try{
    await Product.updateOne({_id:req.params.id},req.body);}
    //req.flash("thanh cong");
    catch(err){
        //req.flash("error","ko thanh cong");
        
    }
    res.redirect("back");   
}

module.exports.detail=async(req,res)=>{
    
    try {
        const find={
        deleted: "true",
        _id:req.params.id
    }
    const product=await Product.findOne(find);
    console.log(product);
    res.render("adimn/page/product/detail",{
        pageTitle: product.title,
        product: product
    });}
    catch(error){
        res.redirect(`${systemConfig.prefixedAdmin}/product`);
    }
}

// search param, body, query cua req