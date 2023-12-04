import React from 'react';
import americaFlagIcon from "../../assets/icons/america-flag-icon.svg"



const CustomDropdownMenu = ({ selectedValue }) => {
  return (
    <div>
      {
        selectedValue === "English" ? null :
          <img src={americaFlagIcon} alt="america-flag-icon" />
      }
      <select>
        <option selected hidden> {
          selectedValue
        }</option>
      </select>
    </div>
  )
}



export default CustomDropdownMenu