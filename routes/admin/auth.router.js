const express=require("express");
const router=express.Router();
const controller=require("../../controller/admin/auth.controller.js");
router.get("/login",controller.login);
router.post("/login",controller.loginPost);
module.exports=router;