import './background.css'
import React from 'react'

import CreateRoom from '../buttons/createRoom/createRoom';
import JoinRoom from '../buttons/joinRoom/joinRoom';

function Background (props) {

  return (
    <div className="background">
      <CreateRoom />
      <JoinRoom />
    </div>
  )
}

export default Background;