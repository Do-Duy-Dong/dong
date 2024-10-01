const dashboardRouter=require("./dashboard.route.js");
const productRouter=require("./product.route.js");
const PATH_ADMIN=require("../../config/system.js");

module.exports =(app)=>{
    
    app.use(PATH_ADMIN.prefixedAdmin+"/dashboard",dashboardRouter);
    app.use(PATH_ADMIN.prefixedAdmin+"/product",productRouter);
    
    
}