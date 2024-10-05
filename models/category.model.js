
const mongoose=require("mongoose");
const slug=require("mongoose-slug-updater");
mongoose.plugin(slug);

const productSchema=mongoose.Schema({   
title: String,
parent_id: Number,
thumbnail: String,

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

const Product=mongoose.model("productCategory",productSchema,"category");
module.exports = Product;