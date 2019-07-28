import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './particles'
import FixedNavbarExample from "./components/navbar/navbar";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesConfig}/>
      <FixedNavbarExample></FixedNavbarExample>
      <Home/>
    </div>
  );
}

export default App;
