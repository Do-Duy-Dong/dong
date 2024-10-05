const express = require('express');//import express
const methodOverride=require("method-override");
const path = require('path');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const database= require('./config/mongoose.js');

const route = require('./routes/client/index.route');//import index.route.js
const adminRoute=require("./routes/admin/index.route.js");
const config=require("./config/system.js");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

database.connect();

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())
app.use(methodOverride("_method"));
app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/view`); 
app.set('view engine', 'pug');

app.locals.prefixedAdmin=config.prefixedAdmin;

adminRoute(app);
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
