import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Styles from "./Navigation.Style";
import Profile from "./Home/../Home/Profile.jpg";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateData } from "./ActionSelectors/AllActions";
const useStyle = makeStyles(Styles);

const Navigation = ({ visibility, currentUser }) => {
  const classes = useStyle();
  const [Image, setImage] = useState(null);
  const dispatch = useDispatch()
  
  return (
    <>
      {visibility ? (
        <div></div>
      ) : (
        <div className={classes.mainDiv}>
          <div className={classes.gap}>
            <Link style={{ color: "black", paddingTop: "10px" }} to="/">
              Home
            </Link>
            <Link className={classes.contentGap} to="/contact">
              Contact US
            </Link>
            
            <img
              src={Image ? Image : Profile}
              alt="Image"
              style={{
                marginLeft: "55px",
                marginTop: "5px",
                height: "35px",
                width: "35px",
                borderRadius: "21.5px",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
