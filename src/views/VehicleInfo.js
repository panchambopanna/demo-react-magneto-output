import React from "react";
import ButtonComponent from "../Components/FormComponent/Button/Button";

const VehicleInfo = (props) => {
  return (
    <>
      <h3>Vehicle View</h3>
      <p> This is the VehicleInfo view of SPA</p>
      <ButtonComponent label={"Back"} path={"/residenceInfo"} />
      <ButtonComponent label={"Continue"} path={"/driverInfo"} />
    </>
  );
};

export default VehicleInfo;
