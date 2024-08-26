const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router.get("/",(req,res,next)=>productController.getProducts(req,res,next));
router.get("/test",(req,res,next)=>{
    res.send("dddd");
    next();
})
router.get("/:id",(req,res,next)=>productController.findProduct(req,res,next));
router.post("/",(req,res,next)=>productController.createProduct(req,res,next));
router.put("/comment/:id",(req,res,next)=>productController.commentProduct(req,res,next));

module.exports = router;