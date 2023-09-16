import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Styles from './Navigation.Style'
const useStyle = makeStyles(Styles)
const Navigation = () => {
    const classes = useStyle()
  return (
    <div className={classes.mainDiv}>
        <div className={classes.gap}>
        <Link style={{color:'black',paddingTop:'10px'}} to='/'>Home</Link>
        <Link className={classes.contentGap} to='/contact'>Contact US</Link>
        </div>
    </div>
  )
}

export default Navigation