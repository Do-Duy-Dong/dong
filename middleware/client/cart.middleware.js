const Cart=require("../../models/cart.model");
module.exports.cartId=async (req,res,next)=>{
    if(!req.cookies.cartId){
        const cart=new Cart();
        await cart.save();
        res.cookie("cartId",cart._id,{
            expires: new Date(Date.now()+900000000)
        });
    }
    else{

    }
    next();
}