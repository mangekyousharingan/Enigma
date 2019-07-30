import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="text-center">
          <MDBCol>
            <h5 className="title text-center">Enigma API</h5>
            <p>
              For more information, please visit our GitHub page.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/mangekyousharingan/Enigma"> mangekyousharingan</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;