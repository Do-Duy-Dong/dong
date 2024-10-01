module.exports.createPost=async(req,res,next)=>{
if(!req.body.title){
    req.flash("error","Vui long nhap tieu de");
    res.redirect("back");
    return;
}
next();// tiep tuc chay sang controller
}