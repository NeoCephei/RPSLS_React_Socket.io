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
    <button type = "button" className = "createRoom" onClick={btnClick}> Create Room </button>
  )
}

export default CreateRoom;