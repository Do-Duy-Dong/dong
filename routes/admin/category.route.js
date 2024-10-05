const express=require("express");
const categoryRouters= express.Router();
var multer = require('multer');
var upload = multer();

const controller=require("../../controller/admin/category.controller.js");
categoryRouters.get("/",controller.index);
categoryRouters.get("/create",controller.create);
categoryRouters.post(
    "/create",
    upload.single("thumbnail"),
    // valid.createPost,
    controller.createPost
)
module.exports=categoryRouters;