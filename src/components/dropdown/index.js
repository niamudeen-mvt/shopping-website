import { Box } from "@mui/material";
import React from "react";
import useMui from "../../hooks/useMui";

const SelectDropDown = ({
  height = "40px",
  width,
  defaultValue = "Selected",
  border
}) => {

  const { SM } = useMui()

  return (
    <Box sx={{
      border: border ? "1px solid #D9D9D9" : "none", width: SM ? width : width / 2, borderRadius: "6px", height: height, display: 'flex',
      justifyContent: 'center',
      padding: '0 11px'
    }}>
      <select className="b1" style={{
        width: '100%',
        background: 'transparent',
        border: 'none',
        outline: 'none',
      }}>
        <option selected hidden>
          {defaultValue}
        </option>
        {[1, 2, 3, 4].map((e) => {
          return <option key={e}>{e}</option>;
        })}
      </select>
    </Box>
  );
};

export default SelectDropDown;
