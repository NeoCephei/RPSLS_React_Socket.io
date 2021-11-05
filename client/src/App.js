import './App.css';

import { io } from "socket.io-client";
import React, {useState, useEffect} from 'react'
import GlobalContext from './hooks/globalContext'

import HomeScreen from './pages/home/home'
import Ingame from './pages/ingame/ingame'

const socket = io.connect('http://localhost:4000')

let roomID;

function App() {

  const [player1, setPlayer1] = useState(false);
  // useEffect(() =>{}, [player1])

  const room = player1 ? <Ingame /> : <HomeScreen />;

  function createRoom () {
    setPlayer1(true)
  }

  function joinRoom () {
    console.log('Joining Room');
  }

  const appFunctions = {createRoom: createRoom, joinRoom: joinRoom}

  return (
    <GlobalContext.Provider value = {{appFunctions}}>
      <div className="App">
        {room}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
