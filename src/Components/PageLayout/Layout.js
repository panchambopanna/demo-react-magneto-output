import ButtonComponent from "../FormComponent/Button/Button";
import InputText from "../FormComponent/InputComponent/InputText";
import SelectInputBox from "../FormComponent/SelectInputBox/SelectInputBox";
import "./Layout.css";
import RadioInputButton from "../FormComponent/RadioInputButton/RadioInputButton";
//import SelectInputBox from "../FormComponent/SelectInputBox/SelectInputBox";

export default function Layout(props) {
  /*Props passed now: img, heading, children */
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
          {/*form parts from page*/}
          <div className="form-back">
            {props.children}
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