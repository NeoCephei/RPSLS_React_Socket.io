import './player2Options.css'
import React, {useState, useContext} from 'react'

import GlobalContext from '../../../hooks/globalContext'

function Player2Options ({roomId, players}) {

  const {appFunctions} = useContext(GlobalContext)
  const [option, setOption] = useState('')

  const displayName = players.player2;

  function btnClick (e) {
    if (e.target.classList.contains("Player2")) {
      console.log(e.target.classList[1])
      // setOption(e.target.className)
    }
  }

  return (
    <div>
      <div className="playerInfo">
        <h2>Welcome {displayName}</h2>
      </div>
      <div className="playerOptions">
        <button type = "button" className = "Player2 Rock" onClick={btnClick}> Rock </button>
        <button type = "button" className = "Player2 Paper" onClick={btnClick}> Paper </button>
        <button type = "button" className = "Player2 Scissors" onClick={btnClick}> Scissors </button>
        <button type = "button" className = "Player2 Lizzard" onClick={btnClick}> Lizzard </button>
        <button type = "button" className = "Player2 Spock" onClick={btnClick}> Spock </button>
      </div>
    </div>
  )
}

export default Player2Options;