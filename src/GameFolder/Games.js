import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import Styles from "./Games.styles";
import { winGame } from "../Redux/action";
import { loseGame } from "../Redux/action";
import { resetScore } from "../Redux/action";
import image1 from "./images1.png";
import image2 from "./images2.png";
import image3 from "./images3.png";
import { Paper } from "@mui/material";
import GeneratePassword from "../PasswordGenerator/GeneratePassword";
import GenerateFormToExcel from "./GenerateFormToExcel/GenerateFormToExcel";
import RPS from "./RPS";
const useStyles = makeStyles(Styles);
const Games = () => {
  const history = useHistory();
  const [value, setValue] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const classes = useStyles();
  const Score = useSelector((state) => state.score);
  const getScore = (result) => {
    if (result === "Win") {
      dispatch(winGame());
    } else if (result === "Lose") {
      dispatch(loseGame());
    }
  };

  
  const resetScores = () => {
    dispatch(resetScore());
    getScore();
  };
  const tabs = [
    {
      label: "Rock Paper Sciessor",
      element: <RPS />,
    },
    {
      label: "Password Generator",
      element: <GeneratePassword />,
    },
    {
      label: "React Form To Excel Generator",
      element: <GenerateFormToExcel />,
    },
  ];

  return (
    <div style={{ height: "459px" }}>
      
      {/* 
      
      <Tabs value={value} onChange={handleChangeTabs}>
        <Tab style={{width: '35%'}} label="Rock Paper Sciessor"/>
        <Tab style={{width: '35%'}} label="Password Generator"/>
        <Tab style={{width: '35%'}} label="Excel Generator"/>
      </Tabs>


      {value === 0 && (
        <div>
            <RPS />
        </div>
      )}

      {value === 1 && (
        <div>
          <GeneratePassword />
        </div>
      )}
      
        {value === 2 && (
        <div>
          <GenerateFormToExcel />
        </div>
      )} 
      */}

      <Tabs value={value} onChange={handleChangeTabs}>
        {tabs && tabs.length ? (
          tabs.map((tab, index) => (
            <Tab 
              key={index} 
              label={tab.label} 
              style={{width: '36%'}} />
          ))
        ) : (
          <div></div>
        )}
      </Tabs>
      {tabs.map((tab, index) => {
        return (
          <div
            key={index}
            style={{ display: value === index ? "block" : "none", }}
          >
            {tab.element}
          </div>
        );
      })}
    </div>
  );
};

export default Games;
