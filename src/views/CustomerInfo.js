import React from "react";
import Layout from "../Components/PageLayout/Layout";
import human from "../Images/Humaaans.png";

const CustomerInfo = (props) => {
  //heding tag
  const heading = "Tell us a little about yourself...";

  //text, date, email, number
  const inputData = [
    { type: "text", value: "First Name" },
    { type: "text", value: "Last Name" },
    { type: "date", value: "DOB" },
    { type: "email", value: "Email Id" },
    { type: "number", value: "Phone No." }
  ];

  //radio button
  const radioList = null;

  //select box or dropdowns
  const optionList = [
    // { value: "", label: "--select--", key: "0" },
    { value: "male", label: "Male", key: "1" },
    { value: "female", label: "Female", key: "2" },
    { value: "other", label: "Other", key: "3" },
    { value: "unknown", label: "I wish not to discuss", key: "4" }
  ];

  //buttons for navigation
  const btnInfo = [
    { label: "Back", path: "residenceInfo" },
    { label: "Continue", path: "residenceInfo" }
  ]

  return (
    <>
      <Layout
        img={human}
        heading={heading}
        inputData={inputData}
        radioList = {radioList}
        optionList={optionList}
        btnInfo={btnInfo}
      />
    </>
  );
};

export default CustomerInfo;
