const express= require('express')
const productSchema =require("../models/products");
const {
	getProductsByType
} = require('../controllers/products');
const router=express.Router();


router.get("/products",(req,res)=>{
    productSchema.find().then((data)=>res.json(data)).catch((error)=>console.log(error))})
   // res.send('todo ok')})


   
router.get("/products/topes",getProductsByType)

   // res.send('todo ok')})er

   router.get("/products/discos",getProductsByType)


    module.exports=router; 

