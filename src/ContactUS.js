import React from 'react'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import App from './App'
const ContactUS = () => {
    const history = useHistory();
    const loginHandle = () => {
      history.push('/login')
    }
  return (
    <div>
         Contact US
    </div>
  )
}

export default ContactUS