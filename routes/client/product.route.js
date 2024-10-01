const express=require("express");
const productRouters= express.Router();
const controller=require("../../controller/client/product.controller");


productRouters.get("/", controller.index);

productRouters.get("/create", controller.index);

productRouters.get("/delete", controller.index);

productRouters.get("/copy", controller.index);

productRouters.get("/:slug",controller.detail);

module.exports = productRouters;

