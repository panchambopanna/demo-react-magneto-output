import { useEffect } from "react";
import { customDropdown } from "./CustomSelectHelper";
import "./selectStyles.css";

export default function SelectInputBox(props) {
  const { id, options, handleChange } = props || {};
  console.log("options", options);
  useEffect(() => {
    customDropdown(handleChange);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="custom-select">
      <select id={id} onChange={handleChange}>
        {options.length &&
          options.map((item) => (
            <option key={item.key} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
}
