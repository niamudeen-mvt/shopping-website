import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const CustomDropDown = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Featured</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Featured"
        onChange={handleChange}
      >
        {
          [1, 2, 3, 4].map((item) => {
            return (
              <MenuItem value={item}>{item}</MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}

export default CustomDropDown