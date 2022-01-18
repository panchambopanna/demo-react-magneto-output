import React from "react";
import Layout from "../Components/PageLayout/Layout";
import human from "../Images/Humaaans.png";

const VehicleInfo = (props) => {
  //heading tag
  const heading = "Tell us about this vehicle.."

  //text,date,email,number
  const inputData = [
    { type: "number", value: "Year" },
    { type: "text", value: "Make" },
    { type: "text", value: "Model" },
    { type: "text", value: "Body Style" },
    { type: "text", value: "This vehicle is registered to?" },
    { type: "text", value: "Is this vehicle loaned or leased?" },
    { type: "text", value: "How is this vehicle used?" },
  ]

  //radio button
  const radioList = null;

  //select box or dropdown
  const optionList = [
    { value: "", label: "--select--", key: "0" }
  ];

  //buttons for navigation
  const btnInfo = [
    { label: "Back", path: "residenceInfo" },
    { label: "Continue", path: "driverInfo" }
  ]

  return (
    <>
      <Layout
        img={human}
        heading={heading}
        inputData={inputData}
        radioList={radioList}
        optionList={optionList}
        btnInfo={btnInfo}
      />
    </>
  );
};

export default VehicleInfo;
