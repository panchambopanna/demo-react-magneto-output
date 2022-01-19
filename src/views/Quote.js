import React from "react";
import Layout from "../Components/PageLayout/Layout";
import image from "../Images/result.png";
import InputText from './../Components/FormComponent/InputComponent/InputText';
import SelectInputBox from './../Components/SelectInputBox/SelectInputBox';
import RadioInputButton from './../Components/FormComponent/RadioInputButton/RadioInputButton';

const Quote = (props) => {
  //heding tag
  const heading = "Your estimated quote";
  //text, date, email, number
  const inputData = null;
  //radio button
  const radioList = null;
  //select box or dropdowns
  const optionList = null;
  //buttons for navigation
  const btnInfo = [
    { label: "Back", path: "coverages" },
    { label: "Issue", path: "quote" }
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
        <div className="literal" style={{ color: 'white', textAlign: 'left' }}>
          <p >With all  the information you have provided to us, your auto insurance quote is:</p>
          <p> $XXXXX </p>
        </div>
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

export default Quote;
