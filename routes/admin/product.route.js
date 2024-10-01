const express=require("express");
var multer = require('multer');
const productRouters= express.Router();
const storage=require("../../func/storage");
var upload = multer({ storage: storage() });

const valid=require("../../validdates/admin/product.valid");
const controller=require("../../controller/admin/product.controller");
productRouters.get("/",controller.index);
productRouters.patch("/change-status/:status/:id",controller.changeStatus);
productRouters.patch("/change-multi",controller.changeMulti);
productRouters.delete("/delete/:id",controller.deleteItem);
productRouters.get("/create",controller.create);
productRouters.post("/create",upload.single('thumbnail'),valid.createPost,controller.createPost);
productRouters.get("/edit/:id",controller.edit);
productRouters.patch("/edit/:id",upload.single("thumbnail"),valid.createPost,controller.editPatch)
productRouters.get("/detail/:id",controller.detail);
// productRouters.patch("/edit/:id",upload.single("thumbnail"),valid.createPost,controller.editPatch)
module.exports = productRouters;