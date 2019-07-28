// import React from "react";
// import { MDBInput } from "mdbreact";
//
// const InputForm = () => {
//   return (
//     <div className="justify-content-center">
//       <p>Text to encode:</p>
//       <MDBInput type="textarea" label="Example label" outline/>
//     </div>
//   );
// };
//
// export default InputForm;
import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBInput,  MDBCardTitle } from "mdbreact";
import './input.css'

const JumbotronPage = ({title, titleText, buttonText, buttonIcon, label}) => {
  return (
    <MDBContainer className="mt-5 text-center bg-transparent">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className="h2 rgba-mdb-color-light red-text">{title}</MDBCardTitle>
              <p className="blue-text my-4 font-weight-bold">
                {titleText}
              </p>
              <MDBInput type="textarea" rows="5" label={label} outline/>
              <hr className="my-4" />
              <div className="pt-2">
                <MDBBtn color="primary" className="waves-effect">{buttonText} <MDBIcon icon={buttonIcon}/></MDBBtn>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
};

export default JumbotronPage;