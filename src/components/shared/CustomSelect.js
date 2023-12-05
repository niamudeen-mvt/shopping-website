import React from 'react';
import { Box, MenuItem, Select, styled } from '@mui/material';
import americaFlagIcon from '../../assets/icons/america-flag-icon.svg';

const CustomSelect = ({ type, width, border, options, margin }) => {
    const [selectedValue, setSelectedValue] = React.useState(1);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // Define a custom styled Select component
    const StyledSelect = styled(Select)({
        '& .MuiSelect-icon': {
            color: type === 'dark' ? 'black' : 'white',
        },
    });

    return (
        <Box m={margin ? 10 : 0}>
            {options[0]?.label === 'USD' ? (
                <img
                    src={americaFlagIcon}
                    alt="america-flag-icon"
                    style={{
                        height: '12.75px',
                        width: '17px',
                        fill: type === 'dark' ? 'black' : 'white',
                    }}
                />
            ) : null}
            <StyledSelect
                sx={{
                    width: width ? width : '100px',
                    height: '40px',
                    outline: 'none !important',
                    boxShadow: 'none',
                    border: 'none',
                    color: type === 'dark' ? 'black' : 'white',
                }}
                value={selectedValue}
                onChange={handleChange}
            >
                {options?.map((option) => {
                    return (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    );
                })}
            </StyledSelect>
        </Box>
    );
};

export default CustomSelect;
