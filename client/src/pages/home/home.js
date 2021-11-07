import './home.css';

import React from 'react';

import Navbar from './../../components/navbar/navbar'
import Background from './../../components/background/background'

function HomeScreen(props) {

  return (
    <div className="HomeScreen">
      <Navbar/>
      <Background/>
    </div>
  );
}

export default HomeScreen;