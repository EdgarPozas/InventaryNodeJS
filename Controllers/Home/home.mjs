import express from "express";
const app= express();

app.set("views","./Controllers/Home/views");

app.get("/",(req,res)=>
{
    res.render("home");
});



export default app;
