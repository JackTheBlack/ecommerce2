const mongoose= require("mongoose");

const productSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            requiered:true
        },
        type:{
            type:String,
            requiered:true
        },
        price:{
            type:Number,
            requiered:true
        },
        stock:{
            type:Number,
            requiered:true
        },
        img:{
            type:String,
            requiered:true
        }
    }
);


module.exports=mongoose.model("products",productSchema);
