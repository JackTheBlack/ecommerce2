const productSchema = require('../models/products');


const getProductsByType=  async (req, res)=>{

        const type =req.query.type;
    

  const get=  await  productSchema.find({type:type}).then((data)=>res.json(data)).catch((error)=>console.log(error))

}

module.exports = {getProductsByType };