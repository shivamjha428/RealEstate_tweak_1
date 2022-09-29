import React from "react";
import "./Aside.css";
import Header from "./Header";
const Aside=()=>{
//     const handleOnclick=()=>{

//     }
return(
    <>
    {/* <div className="both"> */}
    <div className="header-container">
    <h1 className="header">Logo</h1>
    <div>
    <img src="Home.png"></img>
    <h2 className="sec">Property</h2>
    </div>
    <div>
    <img src="notification.png"></img>
    <h2>Assistant</h2>
    </div>
    <div>
    <img src="RI.png"></img>
        <h2>received interest</h2>
    </div>
    <div>
        <img src="SI.png"></img>
        <h2>sent interest</h2>
    </div>
   <div>
    <img src="eye.png"></img>
    <h2>property views</h2>
    </div>
    <div>
        <img src="Tag.png"></img>
        <h2>Tariff plan</h2>
    </div>
    </div>
    <div>
        <a href="/help">help</a>
    </div>
    {/* <Header/> */}
    {/* </div> */}
    </>
)}
export default Aside;