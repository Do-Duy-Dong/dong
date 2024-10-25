const productRouters = require("./product.route");
const homeRouters = require("./home.route");
const searchRouter=require("./search.router");
const cartRouter=require("./cart.router");
const orderRouter=require("./order.router");
const userRouter=require("./user.router");

const cartMiddleware=require("../../middleware/client/cart.middleware");

const menu=require("../../middleware/client/menu.middleware");

// export indexed.route.js
module.exports = (app)=>{
app.use(menu.menu);
app.use(cartMiddleware.cartId);
app.use('/cart', cartRouter);
app.use('/', homeRouters);
app.use("/product",productRouters); 
app.use("/search",searchRouter);
app.use("/checkout",orderRouter);
app.use("/user",userRouter);


};