import "./Models/database";
import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=process.env.PORT||3000;

app.set("view engine","pug");
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(port,()=>
{
    console.log("Servidor iniciado");
});
