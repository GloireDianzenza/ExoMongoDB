const Product = require("../model/product.model");

exports.createProduct = (req,res,next) =>{
    delete req.body._id;
    const product = new Product({
        ...req.body
    });
    product.save()
    .then(
        console.log(product),
        res.status(200).json({message:"Produit enregistré"})
    )
    .catch(error=>{
        console.error("error",error);
        res.status(404).json({error});
    });
}

exports.getProducts = (req,res,next) =>{
    Product.find()
    .then(products=>{
        res.status(200).json(products);
    })
    .catch(error=>{
        console.error("error",error);
        res.status(404).json({error})
    });
}