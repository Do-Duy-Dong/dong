const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    userId:String,
    products:[{
        product_id:String,
        quantity:Number
    }]},
    {
        timestamps :true,
    });
const Cart=mongoose.model("cartSchema",cartSchema,"Cart");
module.exports = Cart;