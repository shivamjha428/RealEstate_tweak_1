import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./page1.css";
// import arr from "./page1";
// let arr2=[...arr];
const Page2 = () => {
  let navigate=useNavigate();
  let name1,value1;
    const [data, setData] = useState({
      length1: "",
      Breath: "",
      Area:"",
      AreaUnit: "",
      bhk: "",
      floor: "",
      Furnished: "",
        car: "",
        Lift: "",
        Electricity:"",
        Facing:"",
        // name:localStorage.getItem("name")
      });
      const handelInput1 = (e) =>{
        name1 = e.target.name;
      value1 = e.target.value;
        setData({...data, [name1]:value1})
        
    }
  const sendData1=async (e)=>{
    const {
          length1,
          Breath,
          Area,
          AreaUnit,
          bhk,
          floor,
          Furnished,
          car,
          Lift,
          Electricity,
          Facing
        } = data;
    localStorage.setItem("length1", length1)
    localStorage.setItem("Breath", Breath)
    localStorage.setItem("Area", Area)
    localStorage.setItem("AreaUnit", AreaUnit)
    localStorage.setItem("bhk", bhk)
    localStorage.setItem("floor", floor)
    localStorage.setItem("Furnished", Furnished)
    localStorage.setItem("car", car)
    localStorage.setItem("Lift", Lift)
    localStorage.setItem("Electricity", Electricity)
    localStorage.setItem("Facing", Facing)
        navigate("/p3");
  }
  return (
    <>
      <h2 className="all">Add New Property</h2>
      <div className="comA">
        <span className="com">1.Basic Info</span>
        <span className="com" id="clr">2.Property Details</span>
        <span className="com">3.General info</span>
        <span className="com">4.Location Info</span>
      </div>
      <div className="type">
        <div className="two">
          <div>
            <h2>Length</h2>
          </div>
          <input id="length1" name="length1" placeholder="Ex:-1000" className="opt1" onChange={handelInput1}></input>
        </div>
        <div className="two">
          <div>
            <h2>Breath</h2>
          </div>
          <input id="Breath" name="Breath" placeholder="Ex:-1000" className="opt1" onChange={handelInput1}></input>
        </div>
      </div>
      <div className="type">
        <div className="two">
          <div>
            <h2>Total Area</h2>
          </div>
          <input id="Area" name="Area" placeholder="ex:-100000" className="opt1" onChange={handelInput1}></input>
        </div>
        <div className="two">
          <div>
            <h2>Area Unit</h2>
          </div>
          <select className="opt" id="AreaUnit" onChange={handelInput1}>
            <option value="Sq.ft">select Area unit</option>
            <option value="Sq.ft">Sq.ft</option>
            <option value="Sq.mtr">Sq.mtr</option>
          </select>
        </div>
      </div>
      <div className="type">
        <div className="two">
          <div>
            <h2>No. of bhk</h2>
          </div>
          <select className="opt" id="bhk" onChange={handelInput1}>
            <option value="1">select bhk</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
          <div className="two">
            <div>
              <h2>No. of floor</h2>
            </div>
            <select className="opt" id="floor" onChange={handelInput1}>
              <option value="1">select floor</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div></div>
        <div className="type">
          <div className="two">
            <div>
              <h2>Furnished</h2>
            </div>
            <select className="opt" id="Furnished" onChange={handelInput1}>
              <option value="yes">select Furnished</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        <div className="two">
          <div>
            <h2>Car parking</h2>
          </div>
          <select className="opt" id="car" onChange={handelInput1}>
            <option value="yes">select parking</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div className="type">
      <div className="two">
        <div>
          <h2>Lift</h2>
        </div>
        <select className="opt" id="Lift" onChange={handelInput1}>
          <option value="yes">select Lift</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="two">
        <div>
          <h2>Electricity</h2>
        </div>
        <input id="Electricity" name="Electricity" placeholder="ex:-3 phase" className="opt1" onChange={handelInput1}></input>
      </div></div>
      <div className="type">
      <div className="two">
        <div>
          <h2>Facing</h2>
        </div>
        <select className="opt" id="Facing" name="Facing" onChange={handelInput1}>
          <option value="East">select Facing</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
        </select>
      </div></div>
      <div className="btn">
        <a href="/p1"><button className="btn15">Previous</button></a>
        <button className="btn15" onClick={sendData1}>Save & Continue</button>
      </div>
    </>
  );
};
export default Page2;