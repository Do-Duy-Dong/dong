const express=require("express");
const productRouters= express.Router();
const controller=require("../../controller/client/product.controller");


productRouters.get("/", controller.index);

productRouters.get("/create", controller.index);

productRouters.get("/delete", controller.index);

productRouters.get("/:slugCategory", controller.category);

productRouters.get("/detail/:slug",controller.detail);

module.exports = productRouters;

