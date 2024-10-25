const mongoose=require("mongoose");
const slug=require("mongoose-slug-updater");
mongoose.plugin(slug);

const productSchema=mongoose.Schema({   
id:String,
title: String,
price: Number,
quantity: Number,
total: Number,
description: String,
discountPercentage: Number,
discountedTota: Number,
thumbnail: String,
status:String,
feature:String,
createBy:{
    account_id:String,
    createdAt:{
        type:Date,
        default: Date.now
    }
},
deleted: {
    type:String,
    default:"false"
    
},
updateBy:{
    account_id:String,
    updateAt: Date
},
position: Number,
slug:{
    type: String,
    slug: "title",
    unique: true
}}, 
{
    timestamps:true
});

const Product=mongoose.model("Product",productSchema,"web");
module.exports = Product;
