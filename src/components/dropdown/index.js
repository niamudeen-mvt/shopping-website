import React from "react";

const SelectDropDown = ({
  height = "40px",
  width,
  options,
  defaultValue = "Selected",
}) => {
  const selectStyles = {
    width: width,
    height: height,
    border: "1px solid #D9D9D9",
    backgroundColor: "transparent",
    borderRadius: "6px",
    padding: "0 11px",
  };

  return (
    <select style={selectStyles} className="form-select">
      <option selected hidden>
        {defaultValue}
      </option>
      {[1, 2, 3, 4].map((e) => {
        return <option key={e}>{e}</option>;
      })}
    </select>
  );
};

export default SelectDropDown;
