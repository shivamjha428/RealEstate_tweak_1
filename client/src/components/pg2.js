import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Page2 from "./page2";
import page2 from "./page2";
import "./page1.css"
const Pg2=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Aside/></div>
        <div className="ac">
        <Header/>
        <Page2/>
        </div>
        </div>
        </>
    )
}
export default Pg2;