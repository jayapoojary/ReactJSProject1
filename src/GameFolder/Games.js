import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'

const Games = () => {
    const history = useHistory()
    
    const handleChangeGame = () => {
        history.push('/rps/1')
    }
    const gotoPasswordGenerator = () => {
      history.push('/password')
    }
    const gotoform = () => {
      history.push('/form')
    }
  return (
    <div style={{height: '459px'}}>
        <Button
        color = 'primary'
        variant = 'contained'
        style={{marginTop: '15px'}}
        onClick={handleChangeGame}
        >
            RPS Game
        </Button>
        <Button
          color = 'primary'
          variant = 'contained'
          style={{marginTop: '15px', marginLeft: '10px'}}
          onClick= {gotoPasswordGenerator}
        >
          Password Generator
        </Button>
        <Button
          color = 'primary'
          variant = 'contained'
          style={{marginTop: '15px', marginLeft: '10px'}}
          onClick= {gotoform}
        >
          Excel Generator
        </Button>
    </div>
  )
}

export default Games