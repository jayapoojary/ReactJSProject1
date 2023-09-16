import React from 'react'
import { makeStyles } from '@mui/styles'
import Styles from './footer.style'
import Instagram from './Instagram.png'
import Download from './download.png'
const useStyles = makeStyles(Styles)
const Footer = () => {
  const classes = useStyles()
  const gotoInstagram = () => {
    window.location.href = 'https://www.instagram.com/call_me_jp_rock/'
  }
  return (
    <div className={classes.footerHeight}>
      <div>
        <p style={{display: 'inline-block', paddingTop:'-10px', marginRight: '5px'}}>Foolow Us:</p> 
        
        <button className={classes.buttonStyle} onClick={gotoInstagram}>
          <img src = {Instagram} className={classes.ImageStyle}/>
        </button>
      </div>
    </div>
  )
}

export default Footer