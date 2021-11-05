import './joinRoom.css'
import React, {useContext} from 'react'

import GlobalContext from './../../../hooks/globalContext'

function JoinRoom (props) {

  const {appFunctions} = useContext(GlobalContext)
  const {joinRoom} = appFunctions

  function btnClick () {
    joinRoom()
  }

  return (
    <button type = "button" className = "joinRoom" onClick={btnClick}> Join Room </button>
  )
}

export default JoinRoom;