import { Parallax } from 'react-parallax';
import React,{useRef } from "react";
import Link from 'next/link';
import { global } from 'styled-jsx/css';


export default function Parallaximg({img, section} ){

    const target= useRef(null);

    const img2=img


  
    return (
        <Parallax bgImage={img2} >
             <div style={{ height: 700 }}>
             
                <div className='midDiv' >
                    <button  type="button" style={{justifyContent:"center",textAlign:"center",alignItems:"center", color:"white", fontSize:"x-large"}} className="transparente">{section} </button>
                    </div>    
               
             </div>
          </Parallax>
    )
}