const express=require("express");
const orderRouter= express.Router();
const controller=require("../../controller/client/order.controller.js");

orderRouter.get("/",controller.index);
orderRouter.post("/success/:orderId",controller.orderPost);
orderRouter.get("/success/:orderId",controller.order);


module.exports = orderRouter;