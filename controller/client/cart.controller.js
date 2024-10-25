const Cart=require("../../models/cart.model");
const Product=require("../../models/product.model");

module.exports.add=async (req,res)=>{
    const cartId=req.cookies.cartId;
    const cart=await Cart.findOne({
        _id:cartId
    });
    const arr=cart.products;
 
    for (const item of cart.products) {
        const record=await Product.findOne({_id:item.product_id}).select("title price thumbnail slug");
        item.infProduct=record;  
        
    }    
    res.render("client/page/cart/index",{
        cartDetail:cart
    })
    
}

module.exports.addPost=async (req,res)=>{
    const quantity=parseInt(req.body.quantity);
    const id=req.params.product;
    const cartId=req.cookies.cartId;
    const cartAdd=await Cart.findOne({_id:cartId});
    const arr= cartAdd.products.find((item)=> item.product_id==id);
    
   if(arr){
    const newQuantity= arr.quantity+quantity;
    
    await Cart.updateOne(
        {   _id:cartId,
            "products.product_id":id
        },
        {
            $set:{"products.$.quantity":newQuantity}
        }

    )
   }
   else{
    const obj={
        product_id:id,
        quantity:quantity,
    }
    await Cart.updateOne({_id:cartId},{
        $push:{products:obj}
    });
    res.redirect("/cart");
    // res.send("Ok");
}}
module.exports.delete= async (req,res)=>{
    const id=req.params.productId;
    const cartId=req.cookies.cartId;
 
    await Cart.updateOne(
        {_id:cartId},
        {$pull:{products:{product_id:id}}}
    );
    res.redirect("back");
}
module.exports.changeQuantity=async (req,res)=>{
    const cartId=req.cookies.cartId;
    const value=req.params.value;
    const productId=req.params.productId;
    await Cart.updateOne(
        {_id:cartId,
            "products.product_id": productId
        },
        {
            $set:{"products.$.quantity":value}
    }
)
res.redirect("back");
}
