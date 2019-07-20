import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './particles'
import NavBar from './components/nav/nav'

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesConfig}/>
      <NavBar/>
    </div>
  );
}

export default App;
