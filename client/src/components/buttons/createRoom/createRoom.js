import './createRoom.css'
import React, {useState, useContext} from 'react'

import GlobalContext from './../../../hooks/globalContext'

function CreateRoom (props) {

  const {appFunctions} = useContext(GlobalContext)
  const {createRoom} = appFunctions

  const [name, setName] = useState('')

  function btnClick () {
    if (name.trim().length > 0) {
      createRoom(name.trim())
    } else {
      alert('Please enter player 1 name')
      setName('');
    }
  }

  function handleNameChange (e) {
    setName(e.target.value);
  } 

  return (
    <div className="createRoomBtn">
      <input id="player1Name" type="text" placeholder="Enter player 1 name"
        value={name} onChange={handleNameChange}></input>
      <button type = "button" className = "createRoom" onClick={btnClick}> Create Room </button>
    </div>
  )
}

export default CreateRoom;