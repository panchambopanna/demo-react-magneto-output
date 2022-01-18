import "./radioStyle.css";

export default function RadioInputButton(props) {
  const { handleChange, radioList } = props || {};
  return (
    <div class="display-flex-cls">
      {radioList.length &&
        radioList.map((item) => {
          const { label, value, checked } = item;
          return (
            <label class="container">
              <input
                type="radio"
                name="radio"
                id={label}
                onChange={handleChange}
                checked={checked}
                value={value}
              />
              {label}
              <span class="checkmark"></span>
            </label>
          );
        })}
    </div>
  );
}
