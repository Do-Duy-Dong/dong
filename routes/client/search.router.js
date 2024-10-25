const express=require("express");
const searchRouters= express.Router();
const controller=require("../../controller/client/search.controller.js");

searchRouters.get("/",controller.index);

module.exports=searchRouters;
