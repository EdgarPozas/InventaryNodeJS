import "./Models/database.mjs";
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";

import home from "./Controllers/Home/home.mjs";
import login from "./Controllers/Login/login.mjs";
import product from "./Controllers/Product/product.mjs";
import user from "./Controllers/User/user.mjs";

const app=express();
const port=process.env.PORT||3000;

app.use(express.static('Assets'));
app.set("view engine","pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(
{
    secret: 'Secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 600000000}
}));

app.use(home);
app.use(login);
app.use(product);
app.use(user);

app.listen(port,()=>console.log("Server Started"));
