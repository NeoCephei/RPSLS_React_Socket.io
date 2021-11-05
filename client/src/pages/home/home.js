import './home.css';

import Navbar from './../../components/navbar/navbar'
import Background from './../../components/background/background'

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Navbar/>
      <Background/>
    </div>
  );
}

export default HomeScreen;