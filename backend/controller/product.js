const Product = require("../model/product.model");
const Avis = require("../model/avis.model");

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

exports.findProduct = (req,res,next) =>{
    Product.findOne({_id:req.params.id})
    .then(product=>{
        res.status(200).json(product);
    })
    .catch(error=>{
        console.error("error",error);
        res.status(404).json({error})
    });
}

exports.commentProduct = (req,res,next) =>{
    Product.findOne({_id:req.params.id})
    .then(product=>{
        console.log(req.body);
        Avis.findOne({_id:req.body.avis_id}).
        then(avis=>{
            Product.findOne({_id:req.params.id}).then(
                product=>{
                    currentAvis = product.avis;
                    currentAvis.push(avis);
                    console.log(currentAvis);
                    Product.updateOne({_id:req.params.id},{...product._doc,_id:req.params.id,avis:currentAvis})
                    .then(product2=>{
                        res.status(201).json({message:"Avis implémenté dans Produit",result:product})
                    })
                    .catch(error=>{
                        console.error("error",error);
                        res.status(404).json({error})
            })
                }
            ).catch(error=>{
                console.error("error",error);
                res.status(404).json({error})
            })
        })
        .catch(error=>{
            console.error("error",error);
            res.status(404).json({error});
        })
    })
    .catch(error=>{
        console.error("error",error);
        res.status(404).json({error});
    })
}