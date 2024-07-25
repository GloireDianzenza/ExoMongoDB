const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const productRouter = require("./route/product");

mongoose.connect("mongodb+srv://gloiredianzenza5:007315Jbmk@cluster0.z9ewwr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("Connected")).catch((error)=>{
    console.log("error");
    console.error("error",error);
});

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(cors());
app.use(express.json());
app.use("/api/product",productRouter);

module.exports = app;