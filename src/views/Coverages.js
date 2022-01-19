import React from "react";
import Layout from "../Components/PageLayout/Layout";
import image from "../Images/documents.png";
import InputText from './../Components/FormComponent/InputComponent/InputText';
import SelectInputBox from './../Components/SelectInputBox/SelectInputBox';
import RadioInputButton from './../Components/FormComponent/RadioInputButton/RadioInputButton';

const Coverages = (props) => {
  //heding tag
  const heading = "Your Coverages";
  //text, date, email, number
  const inputData = [
    { type: "text", value: "Personal Liability" },
    { type: "text", value: "Bodily Injury" },
    { type: "text", value: "Uninsured Motorist" },
    { type: "text", value: "Underinsured Motorist" },
    { type: "text", value: "Comprehensive" }
  ];
  //radio button
  const radioList = null;
  //select box or dropdowns
  const optionList = null
  //buttons for navigation
  const btnInfo = [
    { label: "Back", path: "driverInfo" },
    { label: "Continue", path: "quote" }
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
        img={image}
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

export default Coverages;
