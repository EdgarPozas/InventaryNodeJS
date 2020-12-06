import express from "express";
import middleware from "../Middleware/middleware.js";
const app= express();

app.post("/login",async(req,res)=>
{
    let user=await User.findOne(req.body);
    req.session.user=user;
    res.redirect("/");
});

app.get("/logout",middleware.isLogged,async(req,res)=>
{
    req.session.destroy();
    res.redirect("/");
});


export default app;
