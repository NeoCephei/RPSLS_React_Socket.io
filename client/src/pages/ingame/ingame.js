import './ingame.css';

import React, {useEffect} from 'react'

import Navbar from './../../components/navbar/navbar'
import IngameBG from './../../components/ingameBG/ingameBG'

function Ingame({roomId, players, player2Online}) {

  useEffect(() => {
    console.log('>>>>> Ingame?');
  },[players])

  return (
    <div className="Ingame">
      <Navbar />
      <IngameBG player2Online={player2Online} players={players} roomId={roomId} />
    </div>
  );
}

export default Ingame;