import express from "express";
const app= express();

app.set("views","./Controllers/Login/views");

app.get("/",(req,res)=>
{
    res.render("home");
});



export default app;
