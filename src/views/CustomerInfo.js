import React from "react";
import Layout from "../Components/PageLayout/Layout";
import human from "../Images/Humaaans.png";
import InputText from './../Components/FormComponent/InputComponent/InputText';
import SelectInputBox from './../Components/SelectInputBox/SelectInputBox';
import RadioInputButton from './../Components/FormComponent/RadioInputButton/RadioInputButton';

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
    { value: "", label: "--select--", key: "0" },
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
    const handleChangeSelect = (param) => {
    console.log(param.getAttribute("value"));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Layout
        img={human}
        heading={heading}
        btnInfo={btnInfo}
      >
            {/*Input fields*/}
            {inputData && inputData.map((e, index) =>
              <InputText type={e.type} label={e.value} key={index} />
            )}
            {/*Select fields*/}
            {optionList &&
              <div className="input-box">
              <p>Select Gender </p>{" "}
              <SelectInputBox
                handleChange={handleChangeSelect}
                options={optionList}
              />
            </div> }
            {/*Radio fields*/}
             {radioList &&
             <div className="input-box">
              <p>Select Radio </p>{" "}
              <RadioInputButton radioList={radioList}/>
            </div>}
      </Layout>
    </>
  );
};
export default CustomerInfo;