import ButtonComponent from "../FormComponent/Button/Button";
import InputText from "../FormComponent/InputComponent/InputText";
import SelectInputBox from "../FormComponent/SelectInputBox/SelectInputBox";
import "./Layout.css";
import human from "./Humaaans.png";
// import RadioInputButton from "../FormComponent/RadioInputButton/RadioInputButton";
//import SelectInputBox from "../FormComponent/SelectInputBox/SelectInputBox";
// const radioList = [
//   { label: "Yes", value: "Yes" },
//   { label: "No", value: "no" }
// ];
const optionList = [
  // { value: "", label: "--select--", key: "0" },
  { value: "male", label: "Male", key: "1" },
  { value: "female", label: "Female", key: "2" },
  { value: "other", label: "Other", key: "3" },
  { value: "female4", label: "I wish not to discuss", key: "4" }
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
          <img src={human} alt="img" />
        </div>
        <div className="layout-col-right">
          <h2>Tell us a little about yourself...</h2>

          <div className="form-back">
            <InputText type="text" label="First Name" />
            <InputText type="text" label="Last Name" />
            <InputText type="date" label="DOB" />
            <InputText type="email" label="Email Id" />
            <InputText type="number" label="Phone No." />
            <div className="display-flex-cls">
              <label className="input-label-cls">Select Gender </label>
              <SelectInputBox
                handleChange={handleChangeSelect}
                options={optionList}
              />
            </div>
          </div>
          <div className="continue-btn">
            <ButtonComponent label={"Continue"} path={"/residenceInfo"} />
          </div>
        </div>
      </div>
    </>
  );
}
