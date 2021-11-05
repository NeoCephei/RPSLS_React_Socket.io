import './createRoom.css'
import React, {useContext} from 'react'

import GlobalContext from './../../../hooks/globalContext'

function CreateRoom (props) {

  const {appFunctions} = useContext(GlobalContext)
  const {createRoom} = appFunctions

  function btnClick () {
    createRoom()
  }

  return (
    <div className="createRoomBtn">
      <button type = "button" className = "createRoom" onClick={btnClick}> Create Room </button>
    </div>
  )
}

export default CreateRoom;