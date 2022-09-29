import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './signup.css'
import './login'
const Signup = () => {
    const Navigate=useNavigate();
    const [data, setData] = useState({email:"",password:"",confirmpassword:""});
 
//mongodb://127.0.0.1:27017/

    const Senddata = () => {
      const Navigate = useNavigate;
     
      if(data.password===data.confirmpassword){
        axios({
          url: "  http://localhost:5005/signup",
          method: "POST",
          headers: {
  
          },
          data: {email: data.email, password: data.password,confirmpassword:data.confirmpassword}
      }).then((res) => {
        res.send(  alert(`${data.email} added successfully`));
          Navigate("/p0");       
      }).catch((err) => {
        alert(err)
          console.log(err)
      })
    }
      else{
          alert("Password not matched with Confirm password")
      }
    }
   
  return (
    <div>
      <div className='signup_container'>
      <div className='signup'>
        <div className='sign'>
        <h1 className='h1logo'>Logo</h1> <br/>
        <p>Create New Account</p>
        
         <input className='input1' type="email" name='email' placeholder='Mail ID'  onChange={(e)=>{setData({...data,email:e.target.value})}}/> <br/>

        <input className='input1' type='password' name='password' placeholder='Password' onChange={(e)=>{setData({...data,password:e.target.value})}}/> <br/>

        <input className='input1' type='password' name='confirmpassword' placeholder='Confirm Password'  onChange={(e)=>{setData({...data,confirmpassword:e.target.value})}}/>
       
        <button onClick={Senddata} className="button1">Sign Up</button> <br/>
        
        </div>
    
        </div>
        <p className='signinfooter' onClick={() => { Navigate("/") }}>Sign in</p>
    </div>
    
    
    </div>
  )
}

export default Signup;