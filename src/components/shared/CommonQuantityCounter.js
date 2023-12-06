import React from 'react';
import { Box } from '@mui/material';

const QuantityIncrementer = () => {
    // const [quantity, setQuantity] = useState(1);

    // const decreaseQuantity = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // };

    // const increaseQuantity = () => {
    //     setQuantity(quantity + 1);
    // };

    const commonStyles = {
        flex: 1,
        display: 'grid',
        placeItems: 'center',
    };
    return (
        <Box
            sx={{
                width: '111px',
                height: '36px',
                border: '1px solid #D9D9D9',
                display: 'flex',
                boxSizing: 'border-box',
                borderRadius: '6px',
            }}
        >
            <Box sx={commonStyles}>--</Box>
            <Box sx={commonStyles}>01</Box>
            <Box sx={commonStyles}>+</Box>
        </Box>
    );
};

export default QuantityIncrementer;
