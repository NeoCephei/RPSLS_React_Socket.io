import './ingameBG.css'
import React, {useEffect} from 'react'

import PlayerOptions from '../playerOptions/player1/playerOptions'
import Player2Options from '../playerOptions/player2/player2Options'
import WaitingLogo from '../waitingLogo/waitingLogo'

function IngameBG ({roomId, players, player2Online}) {

  useEffect(() => {
    console.log('>>>>> ingameBG');
  },[player2Online])

  const secondPlayer = !player2Online 
    ? <WaitingLogo /> 
    : <Player2Options players={players} roomId={roomId} player2Online={player2Online}/>

  return (
    <div className="ingameBG">
      <PlayerOptions players={players} roomId={roomId} player2Online={player2Online}/>
      {secondPlayer}
    </div>
  )
}

export default IngameBG;