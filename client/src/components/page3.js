import React from "react";
import "./page1.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import arr2 from "./page2"
// let arr3=[...arr2]
const Page3=()=>{
    let navigate=useNavigate();
  let name2,value2;
  let base64Path;
    const [data, setData] = useState({
      name: "",
      mobile: "",
      poster:"",
      sale: "",
      fp: "",
      Pp: "",
      postImage:""
      });
      const handleInput2 = (e) =>{
        name2 = e.target.name;
      value2 = e.target.value;
        setData({...data, [name2]:value2})
        
    }
    //
    const handlefile =async (e) =>{
      base64Path = await fileTobase64(e.target.files[0]) 
     setData({...data,postImage:base64Path})
     
   }
   const fileTobase64 = (file) =>{
    return new Promise((resolve, reject)=>{
      const reader = new FileReader(file)
      reader.readAsDataURL(file)
      reader.onload = ()=>{
        resolve(reader.result)
      }
      reader.onerror = (err)=>{
        reject(err)
      }
    })
  }
    //
  
  const saveInput2=async (e)=>{
    const {
          name,
          mobile,
          poster,
          sale,
          fp,
          Pp,
          postImage
        } = data;
    localStorage.setItem("name", name)
    localStorage.setItem("mobile", mobile)
    localStorage.setItem("poster", poster)
    localStorage.setItem("sale", sale)
    localStorage.setItem("fp", fp)
    localStorage.setItem("Pp", Pp)
    localStorage.setItem("postImage", postImage)
        navigate("/p4");
        console.log(localStorage.getItem("postImage"));
  }
    return(
        <>
        <h2 className="all">Add New Property</h2>
        <div className="comA">
            <span className="com">1.Basic Info</span>
            <span className="com">2.Property Details</span>
            <span className="com" id="clr">3.General info</span>
            <span className="com">4.Location Info</span>
        </div>
        <div className="type">
            <div className="two">
            <div><h2>Name</h2></div>
            <input id="name" name="name" placeholder="Owner" className="opt1" onChange={handleInput2}></input>
            </div>
            <div className="two">
            <div><h2>Mobile</h2></div>
            <input id="mobile" name="mobile" placeholder="Enter Your Number" className="opt1" onChange={handleInput2}></input>
            </div></div>
            <div className="type">
            <div className="two">
            <div><h2>Posted By</h2></div>
            <select className="opt" id="poster" name="poster" onChange={handleInput2}>
            <option value="Owner">select posted By</option>
            <option value="Owner">Owner</option>
            <option value="Broker">Broker</option>
            </select>
            </div>
            <div className="two">
            <div><h2>Sale Type</h2></div>
            <select className="opt" id="sale" name="sale" onChange={handleInput2}>
            <option value="sold ">select sale</option>
            <option value="sold ">Sold</option>
            <option value="unsold">Unsold</option>
            </select>
            </div></div>
            <div className="type">
            <div className="two">
            <div><h2>Featured Package</h2></div>
            <select className="opt" id="fp" name="fp" onChange={handleInput2}>
            <option value="100000">select Featured package</option>
            <option value="100000">100000</option>
            <option value="200000">200000</option>
            </select>
            </div>
            {/* <div className="type"> */}
            <div className="two">
            <div><h2>PPD Package</h2></div>
            <select className="opt" id="Pp" name="Pp" onChange={handleInput2}>
            <option value="100000">select PPD package</option>
            <option value="100000">100000</option>
            <option value="200000">200000</option>
            </select>
            </div></div>
            <div className="abc">
            {/* <img src="cmg.png" className="img2"></img> */}
           <input id="files" type="file" onChange={handlefile} className="ipimg"/>
            <h3 className="h31">Add Photo</h3>
            </div>
            <div className="btn">
            <a href="/p2"><button className="btn15">Previous</button></a>
            <button className="btn15" onClick={saveInput2}>Save & Continue</button>
            </div>
        </>
    )
}
export default Page3;