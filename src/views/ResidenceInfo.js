import React from "react";
import ButtonComponent from "../Components/FormComponent/Button/Button";

const ResidenceInfo = (props) => {
  return (
    <>
      <h3>ResidenceInfo View</h3>
      <p> This is the ResidenceInfo view of SPA</p>
      <ButtonComponent label={"Back"} path={"/customerInfo"} />
      <ButtonComponent label={"Continue"} path={"/vehicleInfo"} />
    </>
  );
};

export default ResidenceInfo;
