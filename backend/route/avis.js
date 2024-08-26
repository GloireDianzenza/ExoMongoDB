const express = require("express");
const router = express.Router();
const avisController = require("../controller/avis");

router.post("/",(req,res,next)=>avisController.addAvis(req,res,next));
router.get("/",(req,res,next)=>avisController.getAvis(req,res,next));
router.get("/:id",(req,res,next)=>avisController.findAvis(req,res,next));

module.exports = router;