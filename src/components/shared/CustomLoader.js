import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import { flexCenterStyles } from '../styling'


const CustomLoader = () => {


  return (
    <Box sx={{
      ...flexCenterStyles,
      height: '100vh',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.08)',
    }} >
      <CircularProgress color='success' />
    </Box>
  )
}

export default CustomLoader