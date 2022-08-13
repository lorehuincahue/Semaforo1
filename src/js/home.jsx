import React, { useState } from "react";

export const Home = () =>{
const [redlight,setRed]=useState(false);
const [yellowlight,setYellow]=useState(false);
const [greenlight,setGreen]=useState(false);

return(
    <>
<div id="trafficTop">
            <div id="container">
    <div onClick={()=>{
        setRed(true)
        if(
            redlight==true) {
                setRed (false)
            } else {
                setRed(true)
            }
    }} className={redlight==true ? "encendidored" : "redlight"}></div>

    <div  onClick={()=>{
        setYellow(true)
        if(
            yellowlight==true) {
                setYellow (false)
            } else {
                setYellow(true)
            }
    }} className={yellowlight==true ? "encendidoyellow" : "yellowlight"}></div>
               
    <div onClick={()=>{
        setGreen(true)
       if (
        greenlight==true) {
            setGreen (false)
        } else {
            setGreen(true)
        }
    }}  className={greenlight==true ? "encendidogreen" : "greenlight"}></div>
    </div>
    </div>
</>
)
}