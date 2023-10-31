import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
  selectSection: {
    backgroundColor: 'transparent',
  },
  selectElement: {
    color: 'yellow'
  }
});


const CustomDropdownMenu = () => {

  const classes = useStyles();
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };




  return (
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth className={classes.selectSection}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          className={classes.selectElement}
        >
          <MenuItem value={10} >Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}



export default CustomDropdownMenu