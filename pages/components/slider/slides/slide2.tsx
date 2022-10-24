
import React,{useState,useContext} from "react";
import Image from "next/image"
import SlideContext from "../context/slideContext";


export default function Slide2(){
    const {slide,setSlide}=useContext(SlideContext)
    const aux:String=slide

        const handleRightArrow=()=>{
                if (slide===2){
                    setSlide(1)
                }

        }


    return(
            <div
            className="fade-in2"
       
            style={
                {  backgroundImage: 
                    "url(https://static.wixstatic.com/media/2e3f31_3ab629eb303a46b4ad7b2e225c8de9d6~mv2.jpg/v1/fill/w_1500,h_621,al_c,q_85,enc_auto/2e3f31_3ab629eb303a46b4ad7b2e225c8de9d6~mv2.jpg)",
                           height:'95vh',
                          
                           fontSize:'50px',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                         }
                }>
                    <br></br>
                    <div>
                    <h1 style={{color:"white", marginLeft:"60%",marginBottom:"1"}}>BARRAS</h1>
                <button  style={{  padding:" 5px 32px",  fontSize: "20px",marginLeft:"66%", backgroundColor:"#000000"}} onClick={()=>console.log("comprar")} ><span style={{color:"white"}}>{"  "}   Comprar{"  "} </span></button>
    
                    </div>
                    <div>
             <button onClick={()=>setSlide(1)}  style={{position:"absolute",  top:"60%" }}    >  {"<"} </button>
               <button onClick={()=>setSlide(1)}  style={{ position:"absolute", top:"60%",right:"0"}}  >  {">"} </button>
         </div>   
            </div>
            
         

    );


} 