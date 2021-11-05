import './joinRoom.css'
import React, {useState, useContext} from 'react'

import GlobalContext from './../../../hooks/globalContext'

function JoinRoom (props) {

  const {appFunctions} = useContext(GlobalContext)
  const {joinRoom} = appFunctions

  const [room, setRoom] = useState('')

  function btnClick () {
    if (room.length > 0) {
      joinRoom(room)
    } else {
      alert('Please enter some text room')
    }
  }

  function handleRoomInputChange (e) {
    setRoom(e.target.value);
  }

  return (
    <div className="joinRoomBtn">
      <input id="roomCodeInput" type="text" placeholder="Enter room code"
        value={room} onChange={handleRoomInputChange}></input>
      <button type = "button" className = "joinRoom" onClick={btnClick}> Join Room </button>
    </div>
  )
}

export default JoinRoom;