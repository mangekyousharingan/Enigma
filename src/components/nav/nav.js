import React from 'react';

const NavBar = () => {
  return (
    <nav className="pa3 pa4-ns">
      <a className="link dim light-red b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Enigma</a>
      <div className="tc pb3">
        <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Encoder</a>
        <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Decoder</a>
        <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
      </div>
    </nav>
  )
};

export default NavBar;