import React from "react";
import "./page1.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import arr3 from "./page3";
// let arr4=[...arr3];
const Page4=()=>{
    let navigate=useNavigate();
  let name4,value4;
    const [data, setData] = useState({
      PropertyType:localStorage.getItem("PropertyType"),
      Negotiable:localStorage.getItem("Negotiable"),
      Price:localStorage.getItem("Price"),
      Ownership:localStorage.getItem("Ownership"),
      PropertyAge:localStorage.getItem("PropertyAge"),
      PropertyApproved:localStorage.getItem("PropertyApproved"),
      PropertyDiscription:localStorage.getItem("PropertyDiscription"),
      BankLoan:localStorage.getItem("BankLoan"),
      length1:localStorage.getItem("length1"),
      Breath:localStorage.getItem("Breath"),
      Area:localStorage.getItem("Area"),
      AreaUnit:localStorage.getItem("AreaUnit"),
      bhk:localStorage.getItem("bhk"),
      floor:localStorage.getItem("floor"),
      Furnished:localStorage.getItem("Furnished"),
      car:localStorage.getItem("car"),
      Lift:localStorage.getItem("Lift"),
      Electricity:localStorage.getItem("Electricity"),
      Facing:localStorage.getItem("Facing"),
      name:localStorage.getItem("name"),
      mobile:localStorage.getItem("mobile"),
      poster:localStorage.getItem("poster"),
      sale:localStorage.getItem("sale"),
      fp:localStorage.getItem("fp"),
      Pp:localStorage.getItem("Pp"),
      postImage:localStorage.getItem("postImage"),
        Email: "",
      city: "",
      area:"",
      pincode: "",
      Address: "",
      landmark: "",
      lalitude: "",
      longitude: ""
      });
      const handleInput3 = (e) =>{
        name4 = e.target.name;
      value4 = e.target.value;
        setData({...data, [name4]:value4})
        
    }
  const saveInput3 = async (e) => {
    e.preventDefault();
    const {
      PropertyType,
          Negotiable,
          Price,
          Ownership,
          PropertyAge,
          PropertyApproved,
          PropertyDiscription,
          BankLoan,
          length1,
          Breath,
          Area,
          AreaUnit,
          bhk,
          name,
          mobile,
          poster,
          sale,
          fp,
          Pp,
          postImage,
          floor,
          Furnished,
          car,
          Lift,
          Electricity,
          Facing,
        Email,
      city,
      area,
      pincode,
      Address,
      landmark,
      lalitude,
      longitude
    } = data;
    await fetch("http://localhost:5005/adding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PropertyType:PropertyType,
          Negotiable: Negotiable,
          Price:Price,
          Ownership:Ownership,
          PropertyAge:PropertyAge,
          PropertyApproved:PropertyApproved,
          PropertyDiscription:PropertyDiscription,
          BankLoan:BankLoan,
          length1:length1,
          Breath:Breath,
          Area:Area,
          AreaUnit:AreaUnit,
          bhk:bhk,
          floor:floor,
          Furnished:Furnished,
          car:car,
          Lift:Lift,
          Electricity:Electricity,
          Facing:Facing,
          name:name,
          mobile:mobile,
          poster:poster,
          sale:sale,
          fp:fp,
          Pp:Pp,
          postImage:postImage,
        Email: Email,
        city: city,
        area: area,
        pincode:pincode,
        Address: Address,
        landmark: landmark,
        lalitude:lalitude,
        longitude:longitude
      }),
    }).then(() => {
    console.log(data);
    // arr4.push(data);
    // console.log(arr4);
    // console.log(localStorage.getItem("name"));
      navigate("/data");
    });
};
    return(
        <>
        <h2 className="all">Add New Property</h2>
        <div className="comA">
            <span className="com">1.Basic Info</span>
            <span className="com">2.Property Details</span>
            <span className="com">3.General info</span>
            <span className="com" id="clr">4.Location Info</span>
        </div>
        <div className="type">
        <div className="two">
            <div><h2>Email</h2></div>
            <input name="Email" placeholder="Email" className="opt1" onChange={handleInput3}></input>
            </div>
            <div className="two">
            <div><h2>City</h2></div>
            <select name="city" className="opt" onChange={handleInput3}>
            <option>Bengluru</option>
            </select>
            </div>
            </div>
            <div className="type">
            <div className="two">
            <div><h2>Area</h2></div>
            <select name="area" className="opt" onChange={handleInput3}>
            <option value="White Field">White Field</option>
            <option value="Btm layout">Btm layout</option>
            </select>
            </div>
            <div className="two">
            <div><h2>Pincode</h2></div>
            <select name="pincode" className="opt" onChange={handleInput3}>
            <option value="123456">123456</option>
            <option value="654321">654321</option>
            </select></div></div>
            <div className="type">
            <div className="two">
            <div><h2>Address</h2></div>
            <input name="Address" placeholder="Address" className="opt1" onChange={handleInput3}></input>
            </div>
            <div className="two">
            <div><h2>Landmark</h2></div>
            <input name="landmark" placeholder="Landmark" className="opt1" onChange={handleInput3}></input>
            </div></div>
            <div className="type">
            <div className="two">
            <div><h2>Latitude</h2></div>
            <input name="lalitude" placeholder="Latitude" className="opt1" onChange={handleInput3}></input>
            </div>
            <div className="two">
            <div><h2>Longitude</h2></div>
            <input name="longitude" placeholder="Longitude" className="opt1" onChange={handleInput3}></input>
            </div></div>
            <div className="btn">
            <a href="/p3"><button className="btn15">Previous</button></a>
            <button className="btn15" onClick={saveInput3}>Add Property</button>
            </div>
        </>
    )
}
export default Page4;