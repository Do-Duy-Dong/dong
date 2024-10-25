const mongoose=require("mongoose");
const roleSchema= mongoose.Schema({
    id:String,
    title:String,
    description:String,
    permission:{
        type:Array,
        default: false
    },
    
});

const Role=mongoose.model("Role",roleSchema,"role");
module.exports = Role;