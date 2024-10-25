const express=require("express");
const Cart = require("../../models/cart.model");
const Order=require("../../models/order.model");
const Product = require("../../models/product.model");
module.exports.index= async (req,res)=>{
    const cartId=req.cookies.cartId;
    const cart=await Cart.findOne({_id:cartId});
    for( const item of cart.products){
        const in4=await Product.findOne({_id:item.product_id}).select("title price thumbnail slug");
        item.infProduct=in4;
    }
    res.render("client/page/order/index",{
        cartDetail:cart,
        orderId:cartId
    });
}
module.exports.orderPost= async (req,res)=>{
    const cartId=req.cookies.cartId;
    const cart=await Cart.findOne({_id:cartId});
    const userInfor=req.body;
    const productInfo=[];
    for (const item of cart.products) {
        const in4=await Product.findOne({_id:item.product_id}).select(" price discountPercentage ");

        const objProduct={
            product_id:item.product_id,
            quantity:item.quantity,
            price:in4.price,
            discount:in4.discountPercentage
        }
        productInfo.push(objProduct);
}
    const orderInf={
        
        cart_id:cartId,
        userInfor:userInfor,
        products:productInfo
    }
    const order=new Order(orderInf);
    await order.save();
    await Cart.updateOne({_id:cartId},{products:[]});

    res.send("ok");
    // viet direct sang router dat hang thanh cong
}

module.exports.order= async (req,res)=>{
    res.render("client/page/order/success",{

    }
    )    
}