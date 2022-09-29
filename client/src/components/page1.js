import React from "react";
import { useState } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./page1.css";
// let arr=[];
const Page1 = () => {
    let name,value;
    let navigate = useNavigate();
    const [data, setData] = useState({
        PropertyType: "",
        Negotiable: "",
        Price: "",
        Ownership: "",
        PropertyAge: "",
        PropertyApproved: "",
        PropertyDiscription: "",
        BankLoan: "",
      });
      const handleInput = (e) =>{
        name = e.target.name;
      value = e.target.value;
        setData({...data, [name]:value})
        
  }  
  const saveData=async (e)=>{
    const {
          PropertyType,
          Negotiable,
          Price,
          Ownership,
          PropertyAge,
          PropertyApproved,
          PropertyDiscription,
          BankLoan
        } = data;
    localStorage.setItem("PropertyType", PropertyType)
    localStorage.setItem("Negotiable", Negotiable)
    localStorage.setItem("Price", Price)
    localStorage.setItem("Ownership", Ownership)
    localStorage.setItem("PropertyAge", PropertyAge)
    localStorage.setItem("PropertyApproved", PropertyApproved)
    localStorage.setItem("PropertyDiscription", PropertyDiscription)
    localStorage.setItem("BankLoan", BankLoan)
        navigate("/p2");
        console.log(localStorage);
  }
  return (
    <>
      <h2 className="all">Add New Property</h2>
      <div className="comA">
        <span className="com" id="clr">
          1.Basic Info
        </span>
        <span className="com">2.Property Details</span>
        <span className="com">3.General info</span>
        <span className="com">4.Location Info</span>
      </div>
      <div className="type">
        <div className="two">
          <div>
            <h2>Property Type</h2>
          </div>
          <select id="PropertyType" className="opt" name="PropertyType" onChange={handleInput}>
            <option value="House">select Property Type</option>
            <option value="House">House</option>
            <option value="flat">Flat</option>
            <option value="Plot">Plot</option>
          </select>
        </div>
        <div className="two">
          <div>
            <h2>Negotiable</h2>
          </div>
          <select id="Negotiable" className="opt" name="Negotiable" onChange={handleInput}>
            <option value="yes">select Negotiable</option>
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="type">
        <div className="two">
          <div>
            <h2>Price</h2>
          </div>
          <input id="Price" placeholder="ex:-100000" className="opt1" name="Price" onChange={handleInput}></input>
        </div>
        {/* </div>
            <div className="type"> */}
        <div className="two">
          <div>
            <h2>Ownership</h2>
          </div>
          <select id="Ownership" className="opt" name="Ownership" onChange={handleInput}>
            <option value="sold">Select Ownership</option>
            <option value="sold">Sold</option>
            <option value="Unsold">Unsold</option>
          </select>
        </div>
      </div>
      <div className="type">
        <div className="two">
          <div>
            <h2>Property Age</h2>
          </div>
          <select id="PropertyAge" className="opt" name="PropertyAge" onChange={handleInput}>
            <option value="New">select PropertyAge</option>
            <option value="New">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        {/* <div className="type"> */}
        <div className="two">
          <div>
            <h2>Property Approved</h2>
          </div>
          <input
          id="PropertyApproved"
            placeholder="PropertyApproved"
            className="opt1"
            name="PropertyApproved"
            onChange={handleInput}
          ></input>
        </div>
      </div>
      <div className="type">
        <div className="two">
          <div>
            <h2>Property Discription</h2>
          </div>
          <input
            placeholder="PropertyDiscription"
            className="opt1"
            id="PropertyDiscription"
            name="PropertyDiscription"
            onChange={handleInput}
          ></input>
        </div>
        {/* <div className="type"> */}
        <div className="two">
          <div>
            <h2>Bank Loan</h2>
          </div>
          <select id="BankLoan" className="opt" name="BankLoan" onChange={handleInput}>
            <option value="yes">select Loan</option>
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="btn">
        <a href="/p0">
          <button className="btn15">Cancel</button>
        </a>
        {/* <a href="/p2"> */}
          <button className="btn15" onClick={saveData}>Save & Continue</button>
        {/* </a> */}
      </div>
    </>
  );
};
export default Page1;
