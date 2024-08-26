const Avis = require("../model/avis.model");

exports.addAvis = (req,res,next) => {
    delete req.body._id;
    const avis = new Avis({
        ...req.body
    });
    avis.save()
    .then(()=>{
        console.log(avis);
        res.status(200).json({message:"Avis ajouté"})
    })
    .catch(error=>{
        console.error("error",error);
        res.status(404).json({error});
    })
}

exports.getAvis = (req,res,next)=>{
    Avis.find()
    .then(avis=>{
        res.status(200).json(avis);
    })
    .catch(error=>{
        console.error("error",error);
        res.status(404).json({error});
    })
}

exports.findAvis = (req,res,next)=>{
    Avis.findOne({_id:req.params.id})
    .then(avis=>{
        res.status(200).json(avis);
    })
    .catch(error=>{
        console.error("error",error);
        res.status(404).json({error});
    })
}