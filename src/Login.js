import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import App from "./App";
import react from "react";
import { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const [Data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataById, setDataById] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
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
        const response = await axios.get("http://localhost:8087/login/");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAlldata();
  }, []);
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
      const currentUserDeltails = Data.length
        ? Data.find((e) => e.Name === name && e.password === password)
        : data.find((e) => e.name === name && e.password === password);
      setCurrentUser(currentUserDeltails);
      history.push("/games");
      
    } else {
      setErrorMessage("Enter a valid details");
    }
  };
console.log("The Currebt User is ",currentUser)
const currentUsers = Data.find((e) => e.Name === name && e.password === password)
console.log("currentUsers ",currentUsers?.photo)
const photoURL = currentUsers && Object.keys(currentUsers)?.map((e) => e === 'photo' ? currentUsers[e] : null)
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
