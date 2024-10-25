const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    userId:String,
    cart_id:String,
    userInfor:{
        fullname:String,
        phone:String,
        address:String
    },
    products:[{
        product_id:String,
        quantity:Number,
        price:String,
        discount:Number
    }]},
    {
        timestamps :true,
    });
const Order=mongoose.model("orderSchema",orderSchema,"Order");
module.exports = Order;