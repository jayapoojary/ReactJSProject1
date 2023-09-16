import React, { useState } from 'react'
import Profile from './Profile.jpg'
import { makeStyles } from '@mui/styles'
import styles from './Profile.Style'
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import Login from '../Login'
import ContactUS from '../ContactUS'
import Signup from '../Signup/Signup'

const useStyles = makeStyles(styles)
const Home = () => {
  const classes = useStyles()
  const [message, setMessage] = useState('')
  const [name, setName] = useState()
  const [password, setPassword] = useState();
  const [isopened, setIsOpened] = useState(false)
  const displayMessage = () => {
    setTimeout(() => {
      setMessage("hello")
    }, 5000)
  }
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  const history = useHistory()

  const handleSignup = () => {
    setIsOpened(true)
  }
  const handleCloseSignup = () => {
    setIsOpened(false)
  }

  return (
    <>
    <div className={classes.mainDiv}>
      <img className={classes.sizing} src={Profile} alt='Profile' />
      <div>
        <button className={classes.buttonStyle} onClick={handleOpen}>Login</button>
        <button style={{marginLeft:'10px'}} className={classes.buttonStyle}
          onClick={handleSignup}
        >Signup</button>
      </div>
    </div>
    <div>
      <Dialog aria-labelledby="customized-dialog-title" onClose={handleClose} open={isOpen}>
        <DialogTitle style={{backgroundColor: '#ffdd99'}}>
          <Typography>Login</Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogStyles}>
          <Login />
        </DialogContent>
        <DialogActions>
        <button className={classes.buttonStyle} onClick={handleClose} color="primary">
            Cancel
          </button>
        </DialogActions>
      </Dialog>
      <Dialog aria-labelledby="customized-dialog-title" onClose={handleCloseSignup} open={isopened}>
        <DialogTitle style={{backgroundColor: '#ffdd99'}}>
          <Typography>SignUp</Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogStyles}>
          <Signup />
        </DialogContent>
        <DialogActions>
        <button className={classes.buttonStyle} onClick={handleCloseSignup} color="primary">
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  )
}

export default Home