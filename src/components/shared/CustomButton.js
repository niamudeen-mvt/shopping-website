import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({ height = "35px",
  width = "175px", text, bgColor, textColor, mb, borderRadius }) => {
  return (
    <Button variant='contained' sx={{
      height: height,
      width: width,
      color: textColor,
      backgroundColor: bgColor,
      marginBottom: mb,
      border: '1px solid #D9D9D9',
      borderRadius: borderRadius ? '100px' : ''
    }} >{text}</Button>
  )
}

export default CustomButton