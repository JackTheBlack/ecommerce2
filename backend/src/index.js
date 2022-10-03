const express= require('express');
const mongoose = require("mongoose");
const products= require("./routes/getProducts.js");
const CORS = require("cors");

require("DOTENV").config();


const app=express();
const port= process.env.PORT||9000;

///////Middlewere////////////
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
app.use(CORS(corsOptions));

app.use(products);
//routes
app.get("/",(req,res)=>{res.send("welcome to my api")});
app.listen(port, ()=>console.log("escuchando en puerpo ",port));


//connection
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("conectado a mongodb")).catch(()=>console.log(e))