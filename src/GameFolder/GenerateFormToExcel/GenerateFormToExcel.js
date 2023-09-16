import React from 'react'
import { makeStyles } from '@mui/styles';
import Styles from './Form.Style';
const useStyle = makeStyles(Styles);
const GenerateFormToExcel = () => {
    const classes = useStyle()
    const submitForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        
        const csvData = Object.keys(data).map(key => `"${key}","${data[key]}"`).join("\n");
        const blob = new Blob([csvData], { type: "text/csv" });
        
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "data.csv";
        
        document.body.appendChild(link);
        
        // Programmatically click the download link
        link.click();
      };
  return (
    <div className={classes.container}>
        <form id="myForm" onSubmit={submitForm}>
        <div className={classes.formGroup}>
            <label htmlFor="name" className={classes.label}>Name:</label>
            <input type="text" id="name" name="name" autoComplete="on"/><br/><br/>
        </div>
        <div className={classes.formGroup}>
            <label htmlFor="gender" className={classes.label}>Gender:</label>
            <select id="gender" name="gender" className={classes.select}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select><br/><br/>
        </div>
        <div className={classes.formGroup}>
            <label htmlFor="Age" className={classes.label}>Age:</label>
            <input type='text' id='age' name='Age' />
        </div>
        <div className={classes.formGroup}>
            <button type="submit" className={classes.button}>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default GenerateFormToExcel