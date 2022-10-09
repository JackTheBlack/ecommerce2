import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import Slide1 from "./slide1";
export default function Sliderr(){


  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button  {...props} > {""} </button>
  );

  const SlickArrowRight = () => (
    <img   src="https://i.pinimg.com/474x/99/0e/21/990e213c150773565400d23d47d2eb45.jpg"  /> 
  );

 
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay:true,
    autoplaySpeed:2500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };
  return (<div style={{justifyContent:"center",alignItems:"center", paddingBottom:"20px"}} >
    <Slider {...settings}>
      <div style={{justifyContent:"center", textAlign:"center", alignItems:"center" }}>
         <Slide1/>
      </div>
      <div style={{justifyContent:"center", textAlign:"center", alignItems:"center" }}>
         <Slide1/>
      </div>
    
    </Slider>
    </div>
  );
}