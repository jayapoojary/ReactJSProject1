import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import App from "./App";
import react from "react";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const [Data, setData] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const data = [
    {
      name: "abc",
      password: "abc",
    },
  ];
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const getAlldata = async () => {
      try {
        const response = await axios.get('http://localhost:8087/login/')
        setData(response.data)
      }
      catch(error) 
      {
        console.log(error)
      }
    }
    getAlldata()
  }, [])
  const handleSubmit = () => {
    const defaultDataExists = data.some(
      (e) => e.name === name && e.password === password
    );
    const DataisExists = Data.some((e) => e.Name === name && e.password === password)
    if(name === '' || password === '')
    {
      setErrorMessage("Username and Password cannod be empty")
    }
    
    else if(defaultDataExists || DataisExists){
      history.push("/games");
    }
    else
    {
      setErrorMessage("Enter a valid details")
    }
  };
  return (
    <div style={{ marginTop: "65px" }}>
      Username:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      Password:{" "}
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginLeft: "5px", marginTop: "13px",}}
      ></input>
      <label style={{fontSize: "13px",}}>
        <input
          style={{fontSize: "10px", marginLeft: "79px"}}
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)} // Toggle password visibility
        />{" "}
        Show Password
      </label>
      <button
        style={{
          color: "blue",
          marginLeft: "95px",
          marginTop: "35px",
          height: "35px",
          width: "65px",
          backgroundColor: "blue",
          color: "white",
          border: "0px",
        }}
        onClick={handleSubmit}
      >
        Login
      </button>
      <p style={{fontSize: "13px"}}>{errorMessage}</p>
    </div>
  );
};

export default Login;
