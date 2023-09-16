import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Styles from './Signup.Style'
const useStyle = makeStyles(Styles)
const Signup = () => {
  const classes = useStyle()
  const [Name, setName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const data = [
    {
      name: "abc",
      password: "abc",
    },
  ];
const [isDisabled, setIsDisabled] = useState(false)
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8087/login/");
        setUserData(response.data);
      } catch (e) {
        console.log("Error ", e);
      }
    };
    getUserData();
  }, []);
  console.log("userData ", userData);

  const userExists = () => {
    const defaultUserExists = data.some((e) => e.name === Name);
    const userDataExists = userData.some(
      (e) => e.Name === Name && e.password === password
    );
    if (defaultUserExists || userDataExists) return true;
  };

  const handleSubmit = () => {
    const content = { Name, password };
    if (userExists()) {
      setError("User Exists");
    } else if (!Name || !password) {
      setError("Name and Password should not be empty");
    } else {
      axios.post("http://localhost:8087/login/", content);
      setError("User Added");
      setIsDisabled(true)
    }
  };

  return (
    <div style={{ marginTop: "65px" }}>
      Username:{" "}
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      Password:{" "}
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginLeft: "5px", marginTop: "13px" }}
      ></input>
      <label style={{fontSize: "13px", marginLeft: "79px"}}>
        <input
          type="checkbox"
          onChange= {() => setShowPassword(!showPassword)}
        />
        Show Password
      </label>
      <p></p>
      <button
        disabled={isDisabled}
        className={classes.buttonStyle}
        onClick={handleSubmit}
      >
        SignUP
      </button>
      <p style={{ fontSize: "10px", marginLeft: "35px" }}>{error}</p>
    </div>
  );
};

export default Signup;
