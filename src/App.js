import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './particles'
import FixedNavbarExample from "./components/navbar/navbar";
import Home from "./components/home/home";
import JumbotronPage from "./components/input/Input";

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesConfig}/>
      <FixedNavbarExample></FixedNavbarExample>
      <Home/>
      <JumbotronPage
        title="ENCODER"
        buttonText="Encode"
        titleText="Write some text and press button"
        buttonIcon="lock"
        label="Text to encode">
      </JumbotronPage>
      <JumbotronPage
        title="DECODER"
        buttonText="Decode"
        titleText="Paste encoded text and press button"
        buttonIcon="unlock"
        label="Text to decode">
      </JumbotronPage>
    </div>
  );
}

export default App;
