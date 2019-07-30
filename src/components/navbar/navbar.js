import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBBtn
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import ikey from './ikey.png'
import './navbar.css'

class FixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return(
      <div className="navigation">
        <Router>
          <header>
            <MDBNavbar className="brown darken-2" expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                <img className="grow" src={ikey} alt="avatar"/>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav className="justify-content-center">
                  <MDBNavItem>
                    <MDBBtn className="orange lighten-1 black-text">Home</MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn className="orange lighten-1 black-text">Encoder</MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn className="orange lighten-1 black-text">Decoder</MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn className="orange lighten-1 black-text">About</MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="github" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;