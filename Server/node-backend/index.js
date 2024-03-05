const express = require ("express");
const mongoose = require("mongoose");
const signinMiddleWere = require("./middlewere/signin");
const loginMiddleWere = require("./middlewere/login");
const cors=require('cors');
require('dotenv').config();
const app=express();
app.use(express.json());
app.use(cors());
const jwt = require("jsonwebtoken");  

mongoose.connect(process.env.MONGO_CONNECT_LINK);
const loginSchema=mongoose.Schema({
  Useremail:String,
  UserName:String,
  PassWord:String,

});
const loginModel=mongoose.model("Users",loginSchema);

app.post("/signin",async (req,res)=>{
    const Useremail=req.body.Useremail;
    const Username=req.body.Username;
    const Password=req.body.Password;

    const userLogin= new loginModel({
    Useremail:Useremail,
    UserName:Username,
    PassWord:Password,
    });
    await userLogin.save()
        res.status(200).json({
            msg: "user created"
        });
    
});
app.post("/login",loginMiddleWere,async (req,res)=>{
    const Username=req.body.Username;
    const Password=req.body.Password;
    
    const user=await loginModel.findOne({
    UserName:Username,
    PassWord:Password,
    });
    console.log(user);
    if(!user){
        res.status(400).json({
            msg:"invalid",
        });
        return;
    }
    res.status(200).json({
        msg:"user exists",
    }) 
});
app.post("/history", async (req, res) => {
    const { cropName, inputParams } = req.body;
  
    // Retrieve user information from the request headers (or wherever you store it)
    const token = req.headers.authorization;  // Assuming the token is sent in the Authorization header
    const decodedToken = jwt.decode(token);
    const userId = decodedToken.userId;  // Adjust this based on your token structure
  
    // Create a new model or use an existing one to store the history in your MongoDB
    const historyModel = mongoose.model("PredictionHistory", {
      userId: String,  // Add a field to store the user ID
      cropName: String,
      inputParams: Object,  // Adjust this based on your schema
      timestamp: { type: Date, default: Date.now },
    });
  
    const historyEntry = new historyModel({
      userId,
      cropName,
      inputParams,
    });
  
    await historyEntry.save();
  
    res.status(200).json({
      msg: "Prediction history stored successfully",
    });
  });
app.listen(3000);
