const express= require('express')
const productSchema =require("../models/products");

const router=express.Router();


router.get("/products",(req,res)=>{
    productSchema.find().then((data)=>res.json(data)).catch((error)=>console.log(error))})
   // res.send('todo ok')})


   
router.get("/products/topes",(req,res)=>{
    productSchema.find({type:"TOPES"}).then((data)=>res.json(data)).catch((error)=>console.log(error))})

   // res.send('todo ok')})

   router.get("/products/discos",(req,res)=>{
    productSchema.find({type:"DISCOS"}).then((data)=>res.json(data)).catch((error)=>console.log(error))})
module.exports=router; 

