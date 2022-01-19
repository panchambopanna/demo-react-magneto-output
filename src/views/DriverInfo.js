import React from "react";
import Layout from "../Components/PageLayout/Layout";
import image from "../Images/men with car.png";
import InputText from './../Components/FormComponent/InputComponent/InputText';
import SelectInputBox from './../Components/SelectInputBox/SelectInputBox';
import RadioInputButton from './../Components/FormComponent/RadioInputButton/RadioInputButton';

const DriverInfo = (props) => {
  //heading tag
  const heading = "Driver Details"

  //text,date,email,number
  const inputData1 = [
    { type: "number", value: "Current License Status" },
    { type: "text", value: "Age first licensed?" },
    { type: "text", value: "Maritial Status" },
  ]
  const inputData2 = [    
    { type: "text", value: "How is the vehicle used?" }
  ]

  //radio button
  const radioList1 = [
    { label: "Yes", value: "Yes"},
    { label: "No", value: "no" }
  ];
  const radioList2 = [
    { label: "Yes", value: "Yes"},
    { label: "No", value: "no" }
  ];
  const radioList3 = [
    { label: "Yes", value: "Yes"},
    { label: "No", value: "no" }
  ];

  //select box or dropdown
  const optionList = [
    { value: "", label: "--select--", key: "0" }
  ];

  //buttons for navigation
  const btnInfo = [
    { label: "Back", path: "vehicleInfo" },
    { label: "Continue", path: "coverages" }
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
            {inputData1 && inputData1.map((e, index) =>
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

            {/* Input fields
            {inputData2 && inputData2.map((e, index) =>
              <InputText type={e.type} label={e.value} key={index} />
            )} */}

            <div className="literal" style={{color:'white', textAlign:'left'}}>
              <p >In the last 5 years, have you had any</p>
            </div>
            
            {/*Radio fields*/}
             {radioList1 &&
             <div className="input-box">
              <p>Accidents?</p>{" "}
              <RadioInputButton radioList={radioList1} key={0}/>
            </div>}

            {radioList2 &&
             <div className="input-box">
              <p>Tickets or Violations?</p>{" "}
              <RadioInputButton radioList={radioList2}/>
            </div>}

            {radioList3 &&
             <div className="input-box">
              <p>Other claims?</p>{" "}
              <RadioInputButton radioList={radioList3}/>
            </div>}
      </Layout>
    </>
  );
};

export default DriverInfo;
