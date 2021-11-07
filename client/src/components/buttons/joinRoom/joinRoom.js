import './joinRoom.css'
import React, {useState, useContext} from 'react'

import GlobalContext from './../../../hooks/globalContext'

function JoinRoom (props) {

  const {appFunctions} = useContext(GlobalContext)
  const {joinRoom} = appFunctions

  const [room, setRoom] = useState('')
  const [name, setName] = useState('')

  function btnClick () {
    if (room.trim().length > 0 && name.trim().length > 0) {
      joinRoom(name.trim(), room.trim())
    } else {
      alert('Please complete all the fields')
      if (room.trim().length === 0) {
        setRoom('');
      } 
      if (name.trim().length === 0) {
        setName('');
      }
    }
  }

  function handleRoomInputChange (e) {
    setRoom(e.target.value);
  }
  function handleNameChange (e) {
    setName(e.target.value);
  }

  return (
    <div className="joinRoomBtn">
      <input id="player2Name" type="text" placeholder="Enter player 2 name"
        value={name} onChange={handleNameChange}></input>
      <button type = "button" className = "joinRoom" onClick={btnClick}> Join Room </button>
      <input id="roomCodeInput" type="text" placeholder="Enter room code"
        value={room} onChange={handleRoomInputChange}></input>
    </div>
  )
}

export default JoinRoom;