import React from "react";
import Layout from "../Components/PageLayout/Layout";
import human from "../Images/Humaaans.png";
import InputText from './../Components/FormComponent/InputComponent/InputText';
import SelectInputBox from './../Components/SelectInputBox/SelectInputBox';
import RadioInputButton from './../Components/FormComponent/RadioInputButton/RadioInputButton';

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
  const optionList = null

  //buttons for navigation
  const btnInfo = [
    { label: "Back", path: "residenceInfo" },
    { label: "Continue", path: "driverInfo" }
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
              <p>This vehicle is registered to? </p>{" "}
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

export default VehicleInfo;
