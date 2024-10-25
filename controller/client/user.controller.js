const express=require("express");
module.exports.index= async (req,res)=>{
    res.render("client/page/user/index",{
        pageTile:"Trang dang ki"
    });
}
module.exports.register= async (req,res)=>{
    console.log(req.body);
    res.send("ok");
}