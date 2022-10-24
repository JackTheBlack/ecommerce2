
import React,{useState} from "react";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import { global } from 'styled-jsx/css';
import SlideContext from "./context/slideContext";
export default function Sliderr(){


  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button  {...props} > {""} </button>
  );

  const SlickArrowRight = () => (
    <img   src="https://i.pinimg.com/474x/99/0e/21/990e213c150773565400d23d47d2eb45.jpg"  /> 
  );

  const [slide,setSlide]=useState(1);
 
 
  return (
  
  
    <SlideContext.Provider value={{slide:Number,setSlide}}>
 

  
  <div style={{justifyContent:"center",alignItems:"center", paddingBottom:"20px"}} >
   {slide===1? <div className="fade-in2">
  <Slide1/>
  </div>:
  <div  style={{ top:"0%"}} className="fade-in2" >

  <Slide2/>
  </div>
  } 

    </div>
    </SlideContext.Provider>
  );
}