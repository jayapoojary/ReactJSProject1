import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import App from "./App";
import react from "react";
import { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//import { fetchData } from "./APIRedux/Actions";
import { fetchData } from "./ActionSelectors/AllActions";
import Profile from './Home/Profile.jpg'
const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [dataById, setDataById] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const data = [
    {
      name: "abc",
      password: "abc",
    },
  ];

  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  let currentUserDeltails = {}
  const Data = useSelector((state) => state.data.data);
  console.log("Data ",Data)
  const currentUserData = Data.find(
    (e) => e.Name === name && e.password === password
  );
  const handleSubmit = () => {
    const defaultDataExists = data.some(
      (e) => e.name === name && e.password === password
    );
    const DataisExists = Data.some(
      (e) => e.Name === name && e.password === password
    );
    
    if (name === "" || password === "") {
      setErrorMessage("Username and Password cannod be empty");
    } else if (defaultDataExists || DataisExists) {
      history.push("/games");
    } else {
      setErrorMessage("Enter a valid details");
    }
  };
  console.log("The Current User is ", currentUser);
  let photoURL = "";
  {
    currentUserData && Object.keys(currentUserData)?.map((e) => {
      if(e === 'photo')
      {
        photoURL = currentUserData[e]
      }
    })
  }
  <img src={Profile} />
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
        style={{ marginLeft: "5px", marginTop: "13px" }}
      ></input>
      <label style={{ fontSize: "13px" }}>
        <input
          style={{ fontSize: "10px", marginLeft: "79px" }}
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
      <p style={{ fontSize: "13px" }}>{errorMessage}</p>

      <Navigation 
        visibility={true}
        currentUser = {currentUserData}
      />
      
      {
        
        <Navigation 
          visibility = {true}
          Image = {currentUsers?.photo}
        />
      }
      {
        console.log("The URL is ",currentUsers?.photo)
      }
    </div>
  );
};

export default Login;
