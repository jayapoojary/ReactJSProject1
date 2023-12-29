import React from 'react'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import App from './App'
import WhatsApp from './WhatsApp.jpg'
import Style from './Contact.Styles'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
const useStyles = makeStyles(Style)
const ContactUS = () => {
    const classes = useStyles()
    const history = useHistory();
    const loginHandle = () => {
      history.push('/login')
    }
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const Data = useSelector((state) => state.data.data);
  
  return (
    <div style={{height:'459px'}}>
         <div >
           <img src ={WhatsApp} className={classes.whatsappImage} style={{title: 'Contact'}}/>
           <p className={classes.Paragraph} style={{height: '99px', }}>9902353097</p>
         </div>
         {
            Data.map(e => (
              console.log(e)
            ))
         }
    </div>
  )
}

export default ContactUS