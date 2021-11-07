import './waitingLogo.css'
import React from 'react'

function WaitingLogo (props) {

  return (
    <div className="loading">
      <h2>Waiting for player 2</h2>
      <img src="https://c.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" alt="loading" />
    </div>
  )
}

export default WaitingLogo;