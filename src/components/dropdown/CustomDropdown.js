import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import americaFlagIcon from "../../assets/icons/america-flag-icon.svg"
import { useState } from 'react';

const menuItems = [
  "option1",
  "option2",
  "option3"
]

const CustomDropDown = ({ selectedValue, SELECTED_VALUE_COLOR, MENU_ITEMS_COLOR }) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };


  const colorStyles = {
    color: SELECTED_VALUE_COLOR
  }

  const menuItemsStyles = {
    color: MENU_ITEMS_COLOR
  }

  const imgStyles = {
    height: '12.75px',
    width: '17px'
  }


  return (
    <Stack direction='row'>
      {
        selectedValue === "English" ? null :
          <img src={americaFlagIcon} alt="america-flag-icon" style={imgStyles} />
      }
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <Select
          value={currentValue}
          onChange={handleChange}
          displayEmpty
          sx={colorStyles}
        >
          <MenuItem value="">
            <em>{selectedValue}</em>
          </MenuItem>
          {
            menuItems?.map(item => {
              return (
                <MenuItem value={item} sx={menuItemsStyles}>{item}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </Stack>
  );
}
export default CustomDropDown