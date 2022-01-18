import { useEffect } from "react";
import { customDropdown } from "./CustomSelectHelper";
import "./selectStyle.css";

export default function SelectInputBox(props) {
  const { id, options, handleChange } = props || {};

  useEffect(() => {
    customDropdown(handleChange);
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
