import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Page4 from "./page4";
import "./page1.css"
const Pg4=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Aside/></div>
        <div className="ac">
        <Header/>
        <Page4/>
        </div>
        </div>
        </>
    )
}
export default Pg4;