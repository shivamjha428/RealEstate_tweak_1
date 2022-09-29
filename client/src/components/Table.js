import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Table.css";
const Table = () => {
  const [allPost, setAllPost] = useState([]);
  const [pop, setPop] = useState(false);
  const[searchTerm,setsearchTerm]=useState("");
  const [model,setModal]=useState(false);
  const [temp,setTemp]=useState("");
  useEffect(() => {
    fetch("   http://localhost:5005/posts")
      .then((res) => {
        return res.json();
      })
      .then((postData) => {
        // console.log(postData)
        setAllPost(postData);
        // console.log(postData[0].postImage)
      });
  }, []);
  const getImg=(imgSrc)=>{
    setTemp(imgSrc);
    setModal(true);
  }
  const handleSort=(e)=>{
      if(e.target.value=="PropertyType"){
     const temp= allPost.sort((a,b)=>{
        let fa = a.PropertyType.toLowerCase(),
            fb = b.PropertyType.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })
      }
      setAllPost(temp);
      console.log(allPost);
  }
  return (
    <>
    <div className={model? "model open" : "model"}>
      <img src={temp}/>
      <button onClick={()=> setModal(false)}>small</button>
    </div>
    <div>
    <div className="a2">
    <input placeholder="Property" className="PPPID" onChange={(e)=>{
      setsearchTerm(e.target.value);
    }}></input>
    <img src="Search1.png" className="i1"></img>
    <a href="/p1">
    <button className="btn3">Add property</button>
    </a>
    </div>
    <div  className="i6">
    <select name="sort"  className="i5" onChange={handleSort}>
            <option value="yes">Sort</option>
            <option value="PropertyType">Based On property</option>
            <option value="No">Based On contact Number</option>
            <option value="No">Based On views</option>
    </select></div>
              </div>
              <div className="body">
              <table className="Table">
                <tr className="inside table">
                  <td className="cell1">PPP ID</td>
                  <td className="cell1">Image</td>
                  <td className="cell1">Property</td>
                  <td className="cell1">contact</td>
                  <td className="cell1">Area</td>
                  <td className="cell1">views</td>
                  <td className="cell1">status</td>
                  <td className="cell1">Days left</td>
                  <td className="cell1">Action</td>
                </tr>
              </table>
            </div>
    <div>
    {/* {allPost.filter((val)=>{
        if(searchTerm===""){
          return val;
        }else{
           return val.PropertyType.toLowerCase().includes(searchTerm.toLowerCase()) 

        }
      }) */}
     {allPost.map((ele) => {
        return (
          <>
            <div className="body">
              <table className="Table">
                <tr className="inside table">
                  <td className="cell">{parseInt(Math.random() * 10000)}</td>
                  <td className="cell"><img alt="img" className="i4" src={ele.postImage} onClick={()=>getImg(ele.postImage)}></img></td>
                  <td className="cell">{ele.PropertyType}</td>
                  <td className="cell">{ele.mobile}</td>
                  <td className="cell">{ele.Area}</td>
                  <td className="cell">{ele.Facing}</td>
                  <td className="cell">{ele.Ownership}</td>
                  <td className="cell">{parseInt(Math.random() * 100)}</td>
                  <td className="cell"><img src="eye.png" alt="img" className="i3"></img>
                                      <img src="pencil.jpeg" alt="img" className="i3"></img>
                                      </td>
                </tr>
              </table>
            </div>
            </>
        );
      })}
    </div>
    </>
  );
};

export default Table;
