import { Paper } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
import image1 from './images1.png'
import image2 from './images2.png'
import image3 from './images3.png'
import { makeStyles } from '@mui/styles'
import Styles from './Games.styles'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { winGame } from '../Redux/action'
import { loseGame } from '../Redux/action'
import { resetScore } from '../Redux/action'
const useStyles = makeStyles(Styles)

const RPS = () => {
    const dispatch = useDispatch();
    const classes = useStyles()
    const Score = useSelector(state => state.score)
    const getScore = (result) => {
        if(result === 'Win')
        {
            dispatch(winGame())
        }
        else if (result === 'Lose')
        {
            dispatch(loseGame())
        }
    }
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
        let ComputerMove = getComputerMove()
        let result = ''
        if(data === 'rock')
        {
            if(ComputerMove === 'rock')
            {
                result = 'Tie'
            }
            else if(ComputerMove === 'paper')
            {
                result = 'Lose'
            }
            else if(ComputerMove === 'sciessor')
            {
                result = 'Win'
            }
        }
        if(data === 'paper')
        {
            if(ComputerMove === 'rock')
            {
                result = 'Win'
            }
            else if(ComputerMove === 'paper')
            {
                result = 'Tie'
            }
            else if(ComputerMove === 'sciessor')
            {
                result = 'Lose'
            }
        }
        if(data === 'sciessor')
        {
            if(ComputerMove === 'rock')
            {
                result = 'Lose'
            }
            else if(ComputerMove === 'paper')
            {
                result = 'Win'
            }
            else if(ComputerMove === 'sciessor')
            {
                result = 'Tie'
            }
        }
        
        const datas = document.querySelector('.paraGraph')
        datas.innerHTML = `Result: You selected ${data} and Computer selected ${ComputerMove}.
        The Result is: 
        ${result} and Score is ${Score.score}`
        getScore(result);
        const scores = document.querySelector('.Score')
        scores.innerHTML = `Score: ${Score.score}`
        
    }
    const resetScores = () => {
        dispatch(resetScore())
        getScore()
    }
  return (
      <>
    <Paper style={{display:'inlineBlock',height:'429px', width:'1060px', marginLeft:'100px', marginRight:'100px', marginTop:'25px', backgroundColor:'lightGray', marginBottom:'5px'}}>
    <div style={{display:'flex',alignItems:'center', marginLeft: '330px', marginTop:'30px'}}>
        
        <button className={classes.rockButton} 
            style={{marginRight: '10px', marginTop: '15px'}}
            onClick = {() => getResult('rock')}
        >
            <img src={image1} className={classes.image1Stye} />
        </button>
        <button className={classes.rockButton}  
            style={{marginRight: '10px', marginTop: '15px'}}
            onClick = {() => getResult('paper')}
        >
            <img src={image2} className={classes.image1Stye} />
        </button>
        <button className={classes.rockButton} 
            style={{marginRight: '5px', marginTop: '15px'}}
            onClick = {() => getResult('sciessor')}
        >
            <img src={image3} className={classes.image1Stye}/>
        </button>
    </div>
    <Paper className='paraGraph' style={{marginTop: '55px', marginLeft:'255px', position:'fixed',backgroundColor:'solid'}}>Result: </Paper>
    <p className='Score'>Score: </p>
    
    </Paper>
    </>
  )
}

export default RPS