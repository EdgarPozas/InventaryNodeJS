import mongoose from "mongoose";
import fs from "fs";

const data = fs.readFileSync("./Models/credentials.txt",{encoding:'utf8', flag:'r'}).split("\n");
mongoose.connect(
    `mongodb://${data[0]}:${data[1]}@ds033639.mlab.com:33639/inventory`,
    {useNewUrlParser: true, useUnifiedTopology: true}
);

mongoose.connection.once('open', ()=> console.log("Database Connected"));

const UserSchema=new mongoose.Schema(
{
    fullName:String,
    email:String,
    password:String,
    credits:{type:Number,default:1000},
    products:[]
});

const ProductSchema=new mongoose.Schema(
{
    name:String,
    price:String,
    category:String,
    quantity:{type:Number,default:0,min:0}
});

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);

export default mongoose;
