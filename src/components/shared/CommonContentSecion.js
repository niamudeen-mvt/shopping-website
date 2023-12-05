import { Box, Typography } from '@mui/material';
import React from 'react'
import CustomButton from './CustomButton';

const CommonContentSecion = ({ heading, subheading, btnText, btnColor }) => {
  return (
    <Box textTransform={'capitalize'} fontStyle={'normal'} >
      <Typography variant="h5" fontSize={26} fontWeight={500} marginBottom={'30px'}>
        {heading}
      </Typography>
      <Typography variant="body1" fontSize={18} fontWeight={400} lineHeight={'24px'} marginBottom={'30px'} color="#000000">
        {
          subheading ? subheading : `You just want something new to spice up
        <br /> your door`
        }
      </Typography>
      <CustomButton
        bgColor={btnColor}
        text={btnText ? btnText : "Shop Now"}
        height="46px"
        width="155px"
        borderRadius="26px"
        textStyle="capitalize"
        fontSize="18px"
        fontWeight="600px"
      />
    </Box>
  );
}

export default CommonContentSecion