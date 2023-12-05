import { Box, Typography } from '@mui/material';
import React from 'react';
import CustomButton from './CustomButton';
import { flexCenterStyles } from '../styling';

const CommonContentSecion = ({ heading, subheading, btnText, btnColor }) => {
    return (
        <Box
            textTransform={'capitalize'}
            fontStyle={'normal'}
            sx={{ ...flexCenterStyles, flexDirection: 'column' }}
        >
            <Typography variant="h5" fontWeight={500} marginBottom={'14px'}>
                {heading}
            </Typography>
            <Typography
                variant="body2"
                lineHeight={'24px'}
                marginBottom={'30px'}
                color="#000000"
            >
                {subheading
                    ? subheading
                    : `You just want something new to spice up
         your door`}
            </Typography>
            <CustomButton
                bgColor={btnColor}
                text={btnText ? btnText : 'Shop Now'}
                height="46px"
                width="155px"
                borderRadius="26px"
                textStyle="capitalize"
                fontSize="18px"
                fontWeight="600px"
            />
        </Box>
    );
};

export default CommonContentSecion;
