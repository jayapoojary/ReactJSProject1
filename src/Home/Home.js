import React, { useEffect, useState } from 'react'
import Profile from './Profile.jpg'
import { makeStyles } from '@mui/styles'
import styles from './Profile.Style'
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import Login from '../Login'
import ContactUS from '../ContactUS'
import Signup from '../Signup/Signup'
import EditProfile from '../Authorization/EditProfile'
import { fetchData } from '../ActionSelectors/AllActions'
import { useDispatch } from 'react-redux'
const useStyles = makeStyles(styles)
const Home = () => {
  const classes = useStyles()
  const [message, setMessage] = useState('')
  const [name, setName] = useState()
  const [password, setPassword] = useState();
  const [isopened, setIsOpened] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(fetchData())
  }, [])
  const handleUserProfile = () => {
    setIsEdited(true)
  }
  const handleColeEditProfile = () => {
    setIsEdited(false)
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
        <button style={{marginLeft:'10px',}} className={classes.buttonStyle}
          onClick={handleUserProfile}
        >Edit</button>
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
      <Dialog aria-labelledby="customized-dialog-title" onClose={handleColeEditProfile} open={isEdited}>
        <DialogTitle style={{backgroundColor: '#ffdd99'}}>
          <Typography>Edit Profile</Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogStyles}>
          <EditProfile />
        </DialogContent>
        <DialogActions>
        <button className={classes.buttonStyle} onClick={handleColeEditProfile} color="primary">
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  )
}

export default Home