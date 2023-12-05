import { Button } from '@mui/material';
import React from 'react';
import useMui from '../../hooks/useMui';

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
    const { SM } = useMui();
    return (
        <Button
            variant="contained"
            sx={{
                height: height,
                width: SM ? width : width / 2,
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
