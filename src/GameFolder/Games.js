import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Games = () => {
    const history = useHistory()
    const [isClicked, setIsClicked] = useState(false)
    const handleChangeGame = () => {
        setIsClicked(true)
        if(isClicked)
        {
            history.push('/rps')
        }
    }
  return (
    <div>
        <button
        onClick={handleChangeGame}
        >
            RPS Game
        </button>
    </div>
  )
}

export default Games