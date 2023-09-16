import React from 'react'
import { useState } from 'react'
import {
    numbers,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters,
  } from "./Character";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COPY_Fail, COPY_SUCCESS } from "./Message";
import { makeStyles } from '@mui/styles'
import { Paper } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Typography } from '@mui/material';
import { Checkbox } from '@mui/material';
import Styles from './Password.Styles'
const useStyles = makeStyles(Styles);
const GeneratePassword = () => {
    const classes = useStyles();
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleGeneratePassword = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("To generate password you must select atleast one checkbox", true);
    } else {
      let characterList = "";
      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }
      setPassword(createPassword(characterList));
      notify("Password is generated successfully", false);
    }
  };
  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };
  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };
  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleCopyPassword = (e) => {
    if (password === "") {
      notify(COPY_Fail, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };
  const handleChangeSymbol = (e) => {
    setIncludeSymbols(e.target.checked);
  };
  const handleChangeNumber = (e) => {
    setIncludeNumbers(e.target.checked);
  };
  const handleChangeLoweCaseLetters = (e) => {
    setIncludeLowerCase(e.target.checked);
  };
  const handleChangeUpperCaseLetters = (e) => {
    setIncludeUpperCase(e.target.checked)
  }
  return (
    <div className="App">
      <Paper className={classes.divStyle}>
        <div className="generator">
          <InputLabel>
          <h2 className="generator__header">Password Generator</h2>
          </InputLabel>
          <div className="generator__password">
            <InputLabel>{password}</InputLabel>
            <Button
              className="copy__btn"
              color="primary"
              variant="outlined"
              onClick={handleCopyPassword}
              style={{ marginTop: "10px", marginBottom: "25px" }}
            >
              Copy to KeyBoard
            </Button>
          </div>
          <div className="form-group">
            <label htmlFor="password-strength" style={{ paddingRight: "15px" }}>
              Password length
            </label>
            <input
              className={classes.passwordLength}
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type="number"
              id="password-strength"
              name="password-strength"
              max="26"
              min="1"
            />
          </div>
          <div className="form-group" style={{ marginLeft: "9px" }}>
          <FormControlLabel
              label={<Typography>Add Upper Letters</Typography>}
              control={
                <Checkbox
                  checked={includeUpperCase}
                  onChange={handleChangeUpperCaseLetters}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="check" style={{paddingRight:'53px'}}>Check</label>
            <input className={classes.checkBox} checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" id="check" name="check" />
          </div> */}
          <div className="form-group" style={{ marginLeft: "43px" }}>
            <FormControlLabel
              label={<Typography>Add Lowercase Letters</Typography>}
              control={
                <Checkbox
                  checked={includeLowerCase}
                  onChange={handleChangeLoweCaseLetters}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
            />
          </div>
          <div className="form-group">
            <FormControlLabel
              label={<Typography>Include Numbers</Typography>}
              control={
                <Checkbox
                  checked={includeNumbers}
                  onChange={handleChangeNumber}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
            />
          </div>
          <div className="form-group">
            <FormControlLabel
              label={<Typography>Include Symbols</Typography>}
              control={
                <Checkbox
                  checked={includeSymbols}
                  onChange={handleChangeSymbol}
                  inputProps={{ "aria-label": "primary checkbox" }}
                  name="checkedB"
                  style={{ marginRight: "5px" }}
                />
              }
            />
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={handleGeneratePassword}
            className="generator__btn"
            style={{ marginTop: "5px" }}
          >
            Generate Password
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Paper>
    </div>
  )
}

export default GeneratePassword