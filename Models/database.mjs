import mongoose from "mongoose";
import fs from "fs";

const data = fs.readFileSync("./Models/credentials.txt",{encoding:'utf8', flag:'r'}).split("\n");
mongoose.connect(
    `mongodb+srv://${data[0]}:${data[1]}@cluster0.uldfg.mongodb.net/<dbname>?retryWrites=true&w=majority`,
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
    description:String,
    price:{type:Number,default:0,min:0},
    category:String,
    image:String,
    quantity:{type:Number,default:0,min:0}
});

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);

global.User=User;
global.Product=Product;

export default mongoose;
