const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router.get("/",(req,res,next)=>productController.getProducts(req,res,next));
router.get("/test",(req,res,next)=>{
    res.send("dddd");
    next();
})
router.post("/",(req,res,next)=>productController.createProduct(req,res,next));

module.exports = router;