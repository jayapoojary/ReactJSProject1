import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Styles from "./Navigation.Style";
import Profile from "./Home/../Home/Profile.jpg";
const useStyle = makeStyles(Styles);
const Navigation = ({ visibility, Image }) => {
  const classes = useStyle();
  return (
    <>
      {!visibility ? (
        <div className={classes.mainDiv}>
          <div className={classes.gap}>
            <Link style={{ color: "black", paddingTop: "10px" }} to="/">
              Home
            </Link>
            <Link className={classes.contentGap} to="/contact">
              Contact US
            </Link>
            <img
              src={Image ? Image : { Profile }}
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
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navigation;
