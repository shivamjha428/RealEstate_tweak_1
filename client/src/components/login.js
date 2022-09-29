import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
const Login = () => {
  const Navigate = useNavigate();

  const [state, setState] = useState({ email: "", password: "" });
  const [eye, setEye] = useState(false);

  const Tooglebtn = () => {
    setEye((prevEye) => !prevEye);
  };

  const handleLogin = () => {
    axios({
      url: "   http://localhost:5005/",
      method: "POST",
      headers: {},
      data: { email: state.email, password: state.password },
    })
      .then((loginData) => {
        localStorage.setItem("authorization", loginData.data.authToken);
        Navigate("/data");
      })
      .catch((err) => {
        alert("user doesnt exist");
      });
  };

  return (
    <div className="login_container">
      <div className="login">
        <h1 className="loginh1">Logo</h1> <br />
        <p>Enter your credentials to access your account</p> <br />
        <input
          className="logininput"
          type="text"
          id="userid"
          placeholder="User ID"
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}
        />{" "}
        <br />
        <div className="input-element-wrapper">
          <input
            className="logininput"
            type={eye ? "text":"password"}
            id="passwordLI"
            placeholder="Password"
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
          />
          <button className="eye"  onClick={Tooglebtn}>
            {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <button className="signinbtn" onClick={handleLogin}>
          Sign In
        </button>{" "}
        <br />
        <p
          onClick={() => {
            Navigate("/signup");
          }}
          className="signuptext"
        >
          Sign Up
        </p>
      </div>
      <p className="footer">Don't have an account? SignUp</p>
    </div>
  );
};

export default Login;