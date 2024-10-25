
const mongoose=require("mongoose");
const slug=require("mongoose-slug-updater");
mongoose.plugin(slug);

const productSchema=mongoose.Schema({
    id:String,   
    title: String,
    thumbnail: String,
    parent_id: String,
    position: Number,
    slug:{
        type: String,
        slug: "title",
        unique: true
    }}, 
    {
        timestamps:true
    });

const Product=mongoose.model("productCategory",productSchema,"product-category");
module.exports = Product;