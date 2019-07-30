import React from 'react';
import './App.css';
import FixedNavbarExample from "./components/navbar/navbar";
import Home from "./components/home/home";
import JumbotronPage from "./components/input/Input";
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="orange lighten-5">
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
      <Footer/>
    </div>
  );
}

export default App;
