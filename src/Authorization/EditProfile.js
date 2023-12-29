import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../APIRedux/Actions";
//import { updateData } from "../APIRedux/UpdateReducer/Actions";
import { updateData } from "../ActionSelectors/AllActions";
import { FormControlLabel } from "@mui/material";
import { Typography } from "@mui/material";
import { Checkbox } from "@mui/material";
const EditProfile = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.data);
  const errors = useSelector((state) => state.data.error);
  console.log("Data ", data);
  const [Name, setName] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [Data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showOldPassword, setShowLodPassword] = useState(false);
  const handleChangeOldPass = (e) => {
    setShowLodPassword(e.target.checked);
  };
  const handleSubmit = () => {
    const updatedData = { Name: Name, password: newPassword };
    data.map((e) =>
      e.Name === Name && e.password === password
        ? dispatch(updateData(e.id, updatedData)).then(() =>
            setError("Password is updated ")
          )
        : setError("Username or password is incorrect")
    );
  };

  return (
    <div>
      <div>
        <label>
          user Name{" "}
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
      </div>

      <div>
        <label>
          {" "}
          Old password{" "}
          <input
            type={!showOldPassword ? "password" : "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: "5px", marginTop: "13px" }}
          ></input>
        </label>
        <div>
          <FormControlLabel
            label={<Typography>Show Password</Typography>}
            control={
              <Checkbox
                checked={showOldPassword}
                onChange={handleChangeOldPass}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
          />
        </div>
      </div>
      <div>
        <label>
          New Password{" "}
          <input
            type={"text"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ marginLeft: "5px", marginTop: "13px" }}
          ></input>
        </label>
      </div>
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
        Update
      </button>
      <p style={{ fontSize: "13px" }}>{errorMessage}</p>
      <p style={{ fontSize: "13px" }}>{error}</p>
    </div>
  );
};

export default EditProfile;
