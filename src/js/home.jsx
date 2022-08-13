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
                setGreen(false)
                setYellow(false)
            }
    }} className={redlight==true ? "encendidored" : "redlight"}></div>

    <div  onClick={()=>{
        setYellow(true)
        if(
            yellowlight==true) {
                setYellow (false)
            } else {
                setYellow(true)
                setGreen(false)
                setRed(false)
            }
    }} className={yellowlight==true ? "encendidoyellow" : "yellowlight"}></div>
               
    <div onClick={()=>{
        setGreen(true)
       if (
        greenlight==true) {
            setGreen (false)
        } else {
            setGreen(true)
            setRed(false)
            setYellow(false)
        }
    }}  className={greenlight==true ? "encendidogreen" : "greenlight"}></div>
    </div>
    </div>
</>
)
}