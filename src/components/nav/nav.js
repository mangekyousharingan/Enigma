import React from 'react';
import locked from '../navbar/locked.png'

const NavBar = () => {
  return (
    <div>
      <div className="fl w-third">
        <img src={locked} className="grow pa3 pa4-ns" alt="avatar"/>
      </div>
      <div className="fl w-third">
        <nav className="pa3 pa4-ns">
          <a className="link dim light-red b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Enigma</a>
          <div className="tc pb3">
            <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Encoder</a>
            <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Decoder</a>
            <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default NavBar;