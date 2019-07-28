import React from "react";
import { MDBInput } from "mdbreact";

const InputForm = () => {
  return (
    <div className="d-block">
      <p>Text to encode:</p>
      <MDBInput type="textarea" label="Example label" outline/>
    </div>
  );
};

export default InputForm;