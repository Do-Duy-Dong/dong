const express=require("express");
var multer = require('multer');
const categoryRouters= express.Router();
const storage=require("../../func/storage");
var upload = multer({ storage: storage() });

const controller=require("../../controller/admin/category.controller.js");
categoryRouters.get("/",controller.index);
categoryRouters.get("/create",controller.create);
categoryRouters.post(
    "/create",
    upload.single("thumbnail"),
    controller.createPost
)
categoryRouters.get("/edit/:id",controller.edit);
categoryRouters.patch("/edit/:id",upload.single("thumbnail"),controller.editPatch);
module.exports=categoryRouters;