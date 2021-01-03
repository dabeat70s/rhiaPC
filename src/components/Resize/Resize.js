import React, { useEffect, useState } from "react";


export default function Resize() {
  const sizeArr = ["SMALL","MEDIUM","LARGE","Resize screen"]
  const[sizeText, setSizeText]=useState();
  
 
  useEffect(()=> {
    function DisplayText(){
      var num = window.innerWidth < 300 ? 
      0 : window.innerWidth < 700 ? 1 : 2;
      setSizeText(num);    
    }
    window.addEventListener("resize", DisplayText) ;
    window.onload= DisplayText(); 

    return () => window.removeEventListener("resize",DisplayText);
  },[]);



  return (
    <div className="App">
      <h1>Hello From SoundLEJ.com</h1>
      <h2>Where Dancehall Music comes Digitalized!</h2>
      <h1>{sizeArr[sizeText]} </h1>
      
      
    </div>
  );
}
