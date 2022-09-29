import React from "react";
import Logout from "./Logout";
import "./Header.css"
const Header = () => {
    return (
        <>
         <div  className="Head">
             <div className="userid">
                 <div>user Id:06pp125</div>
             </div>
             <div className="username">
             <img src="estate.jpeg" alt="" className="img1" />
                 <div>User Name</div>
                 <img src="arrow.jpeg" alt="" className="img1"></img>
                 <Logout/>
             </div>
             </div>
        </>
      );
    };
    export default Header;