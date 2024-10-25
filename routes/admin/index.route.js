const dashboardRouter=require("./dashboard.route.js");
const productRouter=require("./product.route.js");
const categoryRouter=require("./category.route.js");
const roleRouter=require("./role.router.js");
const accRouter=require("./account.router.js");
const authRouter=require("./auth.router.js");
const authMiddleware=require("../../middleware/admin/auth.middleware.js");
const PATH_ADMIN=require("../../config/system.js");

module.exports =(app)=>{
    
    app.use(PATH_ADMIN.prefixedAdmin+"/dashboard",authMiddleware.requireAuth,dashboardRouter);
    app.use(PATH_ADMIN.prefixedAdmin+"/product",authMiddleware.requireAuth,productRouter);
    app.use(PATH_ADMIN.prefixedAdmin+"/category",authMiddleware.requireAuth,categoryRouter);
    app.use(PATH_ADMIN.prefixedAdmin+"/role",authMiddleware.requireAuth,roleRouter);
    app.use(PATH_ADMIN.prefixedAdmin+"/account",authMiddleware.requireAuth,accRouter);
    app.use(PATH_ADMIN.prefixedAdmin+"/auth",authRouter);


}