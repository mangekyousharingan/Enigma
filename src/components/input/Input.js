import React, { Component } from "react";
import axios from 'axios';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBInput,  MDBCardTitle } from "mdbreact";
import './input.css'

class InputElement extends Component {
  constructor({title, titleText, buttonText, buttonIcon, label}) {
    super()
    this.state = {
      value: '',
      data: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = title;
    this.titleText = titleText;
    this.buttonText = buttonText;
    this.buttonIcon = buttonIcon;
    this.label = label;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

  async handleSubmit(event) {
    console.log(this.state.value);
    const instance = axios.create({

      headers: {'Content-Type': 'application/json', 'dupa':'ok'}
    });

    try {
      const response = await instance.put('/v1/encode', {'text': this.state.value})
    } catch {}

  }

  render() {
    return (
      <MDBContainer className="mt-5 text-center bg-transparent">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="white-90">
              <MDBCardBody>
                <MDBCardTitle className="h2 rgba-mdb-color-light red-text">{this.title}</MDBCardTitle>
                <p className="blue-text my-4 font-weight-bold">
                  {this.titleText}
                </p>
                <MDBInput type="textarea" rows="5" label={this.label} value={this.state.value} onChange={this.handleChange} outline/>
                <hr className="my-4" />
                <div className="pt-2">
                  <MDBBtn color="primary" className="waves-effect" onClick={this.handleSubmit}>{this.buttonText} <MDBIcon icon={this.buttonIcon}/></MDBBtn>
                </div>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}


export default InputElement;