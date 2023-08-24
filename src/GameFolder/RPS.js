import { Paper } from '@mui/material'
import React from 'react'

const RPS = () => {
    
    const getComputerMove = () => {
        let value = Math.random()
        let move = ''
        if(value >=0 && value < 1/3)
        {
            move = 'rock'
        }
        else if(value >= 1/3 && value < 2/3)
        {
            move = 'paper'
        }
        else if(value >= 2/3 && value < 1)
        {
            move = 'sciessor'
        }
        return move;
    }
    const getResult = (data) => {
        const move = getComputerMove()
        let result = ''
        if(data === 'rock')
        {
            if(move === 'rock')
            {
                result = 'Tie'
            }
            else if(move === 'paper')
            {
                result = 'Lose'
            }
            else if(move === 'sciessor')
            {
                result = 'Win'
            }
        }
        alert(result)
    }
  return (
    <Paper style={{display:'inlineBlock',height:'500px', width:'1060px', marginLeft:'100px', marginRight:'100px', marginTop:'25px', backgroundColor:'lightGray'}}>
    <div style={{display:'flex',alignItems:'center', marginLeft: '330px', marginTop:'30px'}}>
        
        <button >Rock</button>
        <button>paper</button>
        <button>Sciessor</button>
        
    </div>
    </Paper>
  )
}

export default RPS