import express from "express";
const app= express();

app.set("views","./Controllers/Home/views");

app.get("/",(req,res)=>
{
    res.render("home",{code:0,user:req.session.user});
});

app.get("/register/:code",(req,res)=>
{
    res.render("home",{code:req.params.code,user:req.session.user});
});

export default app;
