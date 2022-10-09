import React from "react";
import Image from "next/image"


export default function Slide1(){


    return(
            <div style={
                {  backgroundImage: 
                    "url(https://static.wixstatic.com/media/2e3f31_dd05e88e0b9545d189b2e072d8662081~mv2.jpg/v1/fill/w_1500,h_621,al_c,q_85,enc_auto/2e3f31_dd05e88e0b9545d189b2e072d8662081~mv2.jpg)",
                           height:'95vh',
                          
                           fontSize:'50px',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',}
                }>
                    <br></br>
                    <div>
                    <h1 style={{color:"white", marginLeft:"60%",marginBottom:"1"}}>DISCOS OLIMPICOS</h1>
                <button  style={{  padding:" 5px 32px",  fontSize: "20px",marginLeft:"66%", backgroundColor:"#000000"}} onClick={()=>console.log("comprar")} ><span style={{color:"white"}}>{"  "}   Comprar{"  "} </span></button>

                    </div>
                
            </div>
               

    );


} 