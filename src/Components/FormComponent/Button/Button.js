import "./button.stylesheet.css";
import { useNavigate } from "react-router-dom";

export default function ButtonComponent(props) {
  const history = useNavigate();
  const changeRoutePath = () => {
    let pathUrl = props.path;
    console.log(pathUrl);
    history.push(pathUrl);
  };
  return (
    <>
      <button
        className={props.className ? props.className : "button"}
        type="button"
        onClick={changeRoutePath}
      >
        {props.label}
      </button>
    </>
  );
}
