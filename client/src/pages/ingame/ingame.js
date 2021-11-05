import './ingame.css';

import Navbar from './../../components/navbar/navbar'

function Ingame(props) {
  const {roomId} = props

  return (
    <div className="Ingame">
      <Navbar/>
      <h1>Waiting for player 2</h1>
      <p>Your room is {roomId}</p>
    </div>
  );
}

export default Ingame;