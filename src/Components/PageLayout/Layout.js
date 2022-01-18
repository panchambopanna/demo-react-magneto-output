import ButtonComponent from "../FormComponent/Button/Button";
import InputText from "../FormComponent/InputComponent/InputText";
import SelectInputBox from "../FormComponent/SelectInputBox/SelectInputBox";
import "./Layout.css";
import RadioInputButton from "../FormComponent/RadioInputButton/RadioInputButton";
//import SelectInputBox from "../FormComponent/SelectInputBox/SelectInputBox";
const radioList = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "no" }
];

export default function Layout(props) {
  const handleChangeSelect = (param) => {
    console.log(param.getAttribute("value"));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="parent-row">
        <div className="layout-col-left">
          {/*Left side image*/}
          <img src={props.img} alt="img" />
        </div>

        <div className="layout-col-right">
          {/*Heading*/}
          <h2>{props.heading}</h2>

          <div className="form-back">

            {/*Input fields*/}
            {props.inputData && props.inputData.map((e, index) =>
              <InputText type={e.type} label={e.value} key={index} />
            )}

            {/*Select fields*/}
            {props.optionList && <SelectInputBox
              handleChange={handleChangeSelect}
              options={props.optionList}
            />}

            {/*Radio fields*/}
            {props.radioList && <RadioInputButton radioList={props.radioList}/>}

          </div>

          {props.btnInfo && <div className="continue-btn">
            {props.btnInfo.map((e, index) =>
              <ButtonComponent label={e.label} path={`/${e.path}`} key={index} />
            )}
          </div>}

        </div>
      </div>
    </>
  );
}
