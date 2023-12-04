import React from 'react'
import { Button, Typography } from '@mui/material';


const CustomButton = ({ text }) => {
  return (
    <Button variant='contained' sx={{ width: '175px', height: '53px' }} color='success' disableElevation>
      <Typography variant="body1" >
        {text}
      </Typography>
    </Button>
  )
}

export default CustomButton