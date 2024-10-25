const express=require("express");
const userRouter= express.Router();
const controller=require("../../controller/client/user.controller.js");

userRouter.get("/register",controller.index);
userRouter.post("/register",controller.register);

module.exports=userRouter;