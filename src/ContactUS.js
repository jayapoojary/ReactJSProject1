import React from 'react'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import App from './App'
import WhatsApp from './WhatsApp.jpg'
import Style from './Contact.Styles'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(Style)
const ContactUS = () => {
    const classes = useStyles()
    const history = useHistory();
    const loginHandle = () => {
      history.push('/login')
    }
  return (
    <div style={{height:'459px'}}>
         <div >
           <img src ={WhatsApp} className={classes.whatsappImage} style={{title: 'Contact'}}/>
           <p className={classes.Paragraph} style={{height: '99px', }}>9902353097</p>
         </div>
    </div>
  )
}

export default ContactUS