const express=require("express");
const cartRouters= express.Router();
const controller=require("../../controller/client/cart.controller.js");
cartRouters.get("/",controller.add);
cartRouters.post("/add/:product",controller.addPost);
cartRouters.get("/delete/:productId",controller.delete );
cartRouters.get("/update/:productId/:value",controller.changeQuantity);

module.exports=cartRouters;
