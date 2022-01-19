import React from "react";
import ButtonComponent from "../Components/FormComponent/Button/Button";
import Layout from "../Components/PageLayout/Layout";
import human from "../Images/Humaaans.png";
import InputText from './../Components/FormComponent/InputComponent/InputText';
import SelectInputBox from './../Components/SelectInputBox/SelectInputBox';
import RadioInputButton from './../Components/FormComponent/RadioInputButton/RadioInputButton';

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
          </div>}
        {/*Radio fields*/}
        {radioList &&
          <div className="input-box">
            <p>Select Radio </p>{" "}
            <RadioInputButton radioList={radioList} />
          </div>}
      </Layout>
    </>
  );
};

export default ResidenceInfo;
