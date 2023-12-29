import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Styles from "./Signup.Style";
import { postUsers } from "../ActionSelectors/AllActions";
import { useSelector, useDispatch } from "react-redux";
const useStyle = makeStyles(Styles);
const Signup = () => {
  const classes = useStyle();
  const [Name, setName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const data = [
    {
      name: "abc",
      password: "abc",
    },
  ];
  const dispatch = useDispatch();
  const REGEX = /^[a-zA-Z]+[0-9]+[a-zA-Z]+$/;

  const isValidPass = REGEX.test(password);
  console.log("REGEX ", REGEX.test(password));
  const [isDisabled, setIsDisabled] = useState(false);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const Data = useSelector((state) => state.data.data);
  

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
    } else if (!REGEX.test(password)) {
      setError("The passwoed should be charactersdigitscharacter EG: abc123p");
    } else {
      dispatch(postUsers(content));
      setError("User Added");
      setIsDisabled(true);
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
      <label style={{ fontSize: "13px", marginLeft: "79px" }}>
        <input
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)}
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
