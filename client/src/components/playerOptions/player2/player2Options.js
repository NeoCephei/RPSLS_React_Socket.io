import './player2Options.css'
import React, {useState, useContext} from 'react'

import GlobalContext from '../../../hooks/globalContext'

function Player2Options ({roomId, players}) {

  const {appFunctions} = useContext(GlobalContext)
  const [option, setOption] = useState('')

  const displayName = players.player2;

  function btnClick (e) {
    console.log(e.target.className)
    // setOption(e.target.className)
  }

  return (
    <div>
      <div className="playerInfo">
        <h2>Welcome {displayName}</h2>
      </div>
      <div className="playerOptions">
        <button type = "button" className = "Rock" onClick={btnClick}> Rock </button>
        <button type = "button" className = "Paper" onClick={btnClick}> Paper </button>
        <button type = "button" className = "Scissors" onClick={btnClick}> Scissors </button>
        <button type = "button" className = "Lizzard" onClick={btnClick}> Lizzard </button>
        <button type = "button" className = "Spock" onClick={btnClick}> Spock </button>
      </div>
    </div>
  )
}

export default Player2Options;