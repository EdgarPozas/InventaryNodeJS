import express from "express";
const app= express();

app.set("views","./Controllers/User/views");

app.get("/",(req,res)=>
{
    res.render("home");
});



export default app;
