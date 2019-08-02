import React from 'react';
import './App.css';
import FixedNavbarExample from "./components/navbar/navbar";
import Home from "./components/home/home";
import InputElement from "./components/input/Input";
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="orange lighten-5">
      <FixedNavbarExample></FixedNavbarExample>
      <Home/>
      <InputElement
        title="ENCODER"
        buttonText="Encode"
        titleText="Write some text and press button"
        buttonIcon="lock"
        label="Text to encode">
      </InputElement>
      <InputElement
        title="DECODER"
        buttonText="Decode"
        titleText="Paste encoded text and press button"
        buttonIcon="unlock"
        label="Text to decode">
      </InputElement>
      <Footer/>
    </div>
  );
}

export default App;
