import React,{useState,useEffect} from 'react';
import styles from '../../styles/globals.css'
import axios from "axios";
import Link from "next/link";

export default function ProductContainer({type}){

        const [productList,setProductList]=useState(null);

        const getProducts =async()=>{

        try{
          await axios.get(`http://localhost:9000/products/${type}`,{params:{type:type}} ).then((response) => {
            setProductList(response.data);})
      } catch(e){

        }
        }

        useEffect(() => {
        
          getProducts()
           
          },[]);
     
                const path:String=`/productList?product=${type}`;

        return(

            <>
                 {productList===null?<div> <h2>cargando</h2> </div>: <>
                 <div className="puductTitle">
                 
                
                    <Link href={path}>
                   
                       <h5 style={{ paddingTop:"10px", paddingBottom:"10px"}}><button className='transparente'> {type}</button> </h5>
                   
                   
                   </Link>
                 
              
           </div>
           <div className="container">
            <div className='row'>
           {productList.map((p,index)=>
                    
                    <div className='col'>
                      <div style={{justifyContent:"center",textAlign:"center"}}>
                      <img src={p.img} width={200} height={200} />   <br></br>
                       <span>{p.name} </span> 
                      </div>
                    </div>

           )}
               </div>
              </div>      


           </>

                 }   
          
              
            </>
        )

}