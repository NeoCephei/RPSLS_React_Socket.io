import './App.css';

import { io } from "socket.io-client";
import React, {useState} from 'react'
import GlobalContext from './hooks/globalContext'

import HomeScreen from './pages/home/home'
import Ingame from './pages/ingame/ingame'

const socket = io.connect('http://localhost:4000')

let roomId;
let players = {player1: '', player2: ''};

function App() {

  const [player1, setPlayer1] = useState(false);
  const [player2, setPlayer2] = useState(false);
  const room = player1||player2 ? <Ingame roomId={roomId} players={players} player2Online={player2}/> : <HomeScreen />;

  //SOCKETS RECIEVERS
  socket.on('newGame', ({roomID}) => {
    roomId = roomID;
    setPlayer1(true);
  });
  socket.on("startGame", (data) => {
    setPlayer2(true);
  })
  socket.on("wrongRoom", (data) => {
    alert(`The room ${data} doesn't exist. Try again`)
  })

  //FUNCTIONS EMITTERS
  function createRoom (name) {
    players.player1 = name;
    socket.emit('createRoom', {name})
  }
  function joinRoom (name , roomID) {
    players.player2 = name;
    socket.emit('joinGame', {name, roomID});
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
