const productRouters = require("./product.route");
const homeRouters = require("./home.route");
// export indexed.route.js
module.exports = (app)=>{
app.use('/', homeRouters);
app.use("/product",productRouters); 
};