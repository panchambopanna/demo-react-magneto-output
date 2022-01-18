import React from "react";
import ButtonComponent from "../Components/FormComponent/Button/Button";
import Layout from "../Components/PageLayout/Layout";
import human from "../Images/Humaaans.png";


const ResidenceInfo = (props) => {
  //heading tag
  const heading = "Where do you stay?"

  //text,date,email,number
  const inputData = [
    { type: "text", value: "Street Address" },
    { type: "text", value: "City" },
    { type: "text", value: "State" },
    { type: "text", value: "Zip" },
  ]

   //radio button
   const radioList = [
    { label: "Yes", value: "Yes", checked: "checked" },
    { label: "No", value: "no" }
  ];

  //select box or dropdown
  const optionList = null;
  
  //buttons for navigation
  const btnInfo = [
    { label: "Back", path: "customerInfo" },
    { label: "Continue", path: "vehicleInfo" }
  ]

  return (
    <>
      <Layout 
        img = {human}
        heading={heading}
        inputData={inputData}
        radioList = {radioList}
        optionList = {optionList}
        btnInfo={btnInfo}
      />
    </>
  );
};

export default ResidenceInfo;
