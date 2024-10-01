const express=require("express");
const homeRouters= express.Router();
const controller=require("../../controller/client/home.controller.js")
module.exports = homeRouters;

homeRouters.get("/", controller.index);
// asd
homeRouters.get("/home",controller.index);