import React,{useState,useEffect} from 'react';
import styles from '../../styles/globals.css'
import axios from "axios";
import Link from "next/link";

export default function ProductContainer({title}){

        const [productList,setProductList]=useState(null);

        useEffect(() => {
          try{
            axios.get(`http://localhost:9000/products/${title}`).then((response) => {
              setProductList(response.data);           
             
            });
            }catch(e){
              console.log(e)
            }
            console.log(productList)
          },[]);
     
                const path:String=`/productList?product=${title}`;

        return(

            <>
                 {productList===null?<div> <h2>cargando</h2> </div>: <><div className="puductTitle">
                 
                 <div className='row'>
                   <div className='col'>
                    <Link href={path}>
                   
                       <h5 style={{  marginTop:'10px'}}><button className='transparente'> {title}</button> </h5>
                   
                   
                   </Link>
                   </div>
                 </div>
              
           </div>
           <div className="container">
            <div className='row'>
           {productList.map((p)=>
                    <div className='col'>
                      <div style={{justifyContent:"center",textAlign:"center"}}>
                      <img src={p.img} width="200px" height={200} />   <br></br>
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