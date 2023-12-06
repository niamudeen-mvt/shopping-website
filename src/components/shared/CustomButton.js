import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({
    height = '35px',
    width = '175px',
    text,
    bgColor,
    textColor,
    mb,
    borderRadius,
    textStyle = 'uppercase',
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    border,
}) => {

    return (
        <Button
            variant="contained"
            sx={{
                height: height,
                width: width,
                color: textColor,
                backgroundColor: bgColor,
                marginBottom: mb,
                border: border ? '1px solid #D9D9D9' : 'none',
                borderRadius: borderRadius,
                '&:hover': {
                    backgroundColor: bgColor, // Set the desired hover color here
                },
                textTransform: textStyle,
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontStyle: 'normal',
                lineHeight: lineHeight,
                letterSpacing: letterSpacing,
            }}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
