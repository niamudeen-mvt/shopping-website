import { Button } from '@mui/material';
import React from 'react';

const CustomLabel = ({
    height,
    width,
    text,
    bgColor,
    textColor,
    borderRadius,
    textStyle = 'uppercase',
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    position,
    top,
}) => {
    // TopLeft

    const styleObj = {
        height: height,
        width: width,
        color: textColor,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        '&:hover': {
            backgroundColor: bgColor,
        },
        textTransform: textStyle,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontStyle: 'normal',
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        position: 'absolute',
    };

    const customLabelStyles1 = {
        ...styleObj,
        top: top ? top : '10px',
        left: '10px',
    };
    const customLabelStyles2 = {
        ...styleObj,
        top: top ? top : '10px',
        right: '15px',
    };

    // TopRight
    return (
        <Button
            variant="contained"
            sx={
                position === 'top-right'
                    ? customLabelStyles2
                    : customLabelStyles1
            }
        >
            {text}
        </Button>
    );
};

export default CustomLabel;
