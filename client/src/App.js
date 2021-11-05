import './App.css';

import { io } from "socket.io-client";
import React, {useState} from 'react'
import GlobalContext from './hooks/globalContext'

import HomeScreen from './pages/home/home'
import Ingame from './pages/ingame/ingame'

const socket = io.connect('http://localhost:4000')

let roomId;

function App() {

  const [player1, setPlayer1] = useState(false);
  // useEffect(() =>{}, [player1])

  const room = player1 ? <Ingame roomId={roomId} /> : <HomeScreen />;

  socket.on('newGame',(data) => {
    const {roomID} = data;
    roomId = roomID;
    setPlayer1(true);
  });

  function createRoom () {
    socket.emit('createRoom', {name: 'Player 1'})
  }

  function joinRoom (data) {
    console.log('client data: ', data)
    socket.emit('joinGame',{
      name:'player 2',
      roomID:data
    });
  }

  //Player 1 Joined
  socket.on("player1Joined", (data) => {
    console.log("Player 1 joined", data);
    transition(data);
  })
  //Player 2 Joined
  socket.on("player2Joined", (data) => {
    console.log("Player 2 joined", data);
    transition(data);
  })


const transition = (data) => {
  console.log(data)
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
