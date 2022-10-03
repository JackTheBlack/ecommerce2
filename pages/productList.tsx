import React,{useState,useEffect} from 'react';
import styles from '../styles/globals.css'
import axios from "axios";
import { useRouter } from 'next/router';
import NavBar from './components/navbar';
export default function ProductList(){

    const router=useRouter();
    const [productList,setProductList]=useState(null);

    useEffect(() => {
      if(productList===null){
       try{
         
        axios.get(`http://localhost:9000/products/${router.query.product}`).then((response) => {
          setProductList(response.data);           
             
          
        });
       
    } catch(e){
      console.log(e);
    }}
    });
 

return(<>
    <NavBar/><br>
    </br>
    <p style={{justifyContent:"center", textAlign:"center", fontSize:"small"}}>home`s/{router.query.product} </p>
    <h1 style={{justifyContent:"center", textAlign:"center"}}>{router.query.product} </h1>
  {productList===null?<>CARGANDO...   
 
        </>:
    <div className="container">
    <div className='row'>
   {productList.map((p)=>
            <div className='col'>
              <div style={{justifyContent:"center",textAlign:"center"}}>
              <img src={p.img} width="200px" height={200} />   <br></br>
               <span>{p.name} </span><br></br> 
               <span>----------</span><br></br>
               <pan>${p.price} </pan>

              </div>
            </div>

   )}
       </div>
      </div>      
  
  }
  


</>)


}