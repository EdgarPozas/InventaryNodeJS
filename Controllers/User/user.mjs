import express from "express";
import middleware from "../Middleware/middleware.js";
const app= express();

app.set("views","./Controllers/User/views");

app.post("/register", async (req,res)=>
{
    let data=req.body;
    let user=new User(data);
    let result=await user.save();
    res.redirect("/register/1");
});

app.post("/edit-user",middleware.isLogged, async (req,res)=>
{
    let result=await User.updateOne({_id:req.session.user._id},req.body);
    let user=await User.findOne({_id:req.session.user._id});
    req.session.user=user;
    res.redirect("/");
});

app.get("/delete-user",middleware.isLogged, async (req,res)=>
{
    let result=await User.deleteOne({_id:req.session.user._id});
    res.redirect("/logout");
});

export default app;
