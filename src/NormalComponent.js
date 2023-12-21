import React from 'react'
import Navigation from './Navigation'

const NormalComponent = () => {
  return (
    <div>
        {
            <Navigation
                visibility = {false}
            />
        }
    </div>
  )
}

export default NormalComponent