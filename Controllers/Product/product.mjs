import express from "express";
import middleware from "../Middleware/middleware.js";
const app= express();

app.set("views","./Controllers/Product/views");

app.get("/categories/:category", async (req,res)=>
{
    let products=await Product.find({category:req.params.category,quantity:{$gt:0}});
    res.render("categories",{user:req.session.user,products:products,category:req.params.category});
});

app.get("/my-products",middleware.isLogged, async (req,res)=>
{
    let products=await Product.find({_id:{$in:req.session.user.products}});
    res.render("my-products",{user:req.session.user,products:products});
});

app.post("/new-product",middleware.isLogged, async (req,res)=>
{
    let data=req.body;
    let product=new Product(data);
    let result=await product.save();
    let user_result=await User.updateOne({_id:req.session.user._id},{$push:{products:result._id}});
    req.session.user.products.push(result._id);
    res.redirect("/my-products");
});

app.post("/edit-product",middleware.isLogged, async (req,res)=>
{
    let result=await Product.updateOne({_id:req.body._id},req.body);
    res.redirect("/my-products");
});

app.get("/delete-product/:id",middleware.isLogged, async (req,res)=>
{
    let result=await Product.deleteOne({_id:req.params.id});
    let user_result=await User.updateOne({_id:req.session.user._id},{$pull:{products:[result._id]}});
    res.redirect("/my-products");
});

app.get("/buy-product/:id",middleware.isLogged, async (req,res)=>
{
    let product=await Product.findOne({_id:req.params.id});
    let result_product=await Product.updateOne({_id:req.params.id},{$set:{quantity:product.quantity-1}});
    req.session.user.credits-=product.price;
    let user_result=await User.updateOne({_id:req.session.user._id},{$set:{credits:req.session.user.credits}});
    res.redirect("/my-products");
});

export default app;
