const mongoose=require("mongoose");
const slug=require("mongoose-slug-updater");
mongoose.plugin(slug);

const productSchema=mongoose.Schema({   
id:String,
title: String,
price: Number,
quantity: Number,
total: Number,
discountPercentage: Number,
discountedTota: Number,
thumbnail: String,
status:String,
deleted: {
    type:String,
    default:"true"
    
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
