import React from "react";
import ButtonComponent from "../Components/FormComponent/Button/Button";

const DriverInfo = (props) => {
  return (
    <>
      <h3>Driver info View</h3>
      <p> This is the DriverInfo view of SPA</p>
      <ButtonComponent label={"Continue"} path={"/coverages"} />
    </>
  );
};

export default DriverInfo;
