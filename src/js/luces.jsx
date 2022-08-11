import React, { useState } from "react";

export const Luces = () =>{
const [redlight,setRed]=useState(false);
const [yellowlight,setYellow]=useState(false);
const [greenlight,setGreen]=useState(false);

return(
    <>

    <div className="redlight"></div>
    <div className="yellowlight"></div>
    <div className="greenlight"></div>
</>
)
}