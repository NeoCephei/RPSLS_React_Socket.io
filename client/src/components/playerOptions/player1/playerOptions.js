import './playerOptions.css'
import React, {useState, useContext} from 'react'

import GlobalContext from '../../../hooks/globalContext'

function PlayerOptions ({roomId, players, player2Online}) {

  const {appFunctions} = useContext(GlobalContext)
  const [option, setOption] = useState('')

  const displayName = players.player1;

  function btnClick (e) {
    console.log(e.target.className)
    // setOption(e.target.className)
  }

  return (
    <div>
      <div className="playerInfo">
        <h4>Your room id is: {roomId}</h4>
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

export default PlayerOptions;