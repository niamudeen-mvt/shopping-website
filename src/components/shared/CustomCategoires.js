import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { flexCenterStyles } from '../styling';
import deliverySvg from '../../assets/icons/delivery.svg';
import shippingSvg from '../../assets/icons/shipping.svg';
import moneySvg from '../../assets/icons/money.svg';
import securitySvg from '../../assets/icons/security.svg';
import CommonContainer from '../container';

const categoryData = [
    {
        id: 1,
        img: deliverySvg,
        title: 'Free Delivery',
    },
    {
        id: 2,
        img: shippingSvg,
        title: 'Non-contact shipping',
    },
    {
        id: 3,
        img: moneySvg,
        title: 'Money back guarntee',
    },
    {
        id: 4,
        img: securitySvg,
        title: 'Secure payments',
    },
];

const CustomCategories = ({ border = false }) => {
    const GREY_COLOR = 'rgba(0, 0, 0, 0.08)';

    return (
        <Box
            className="common_margin"
            minHeight={115}
            sx={flexCenterStyles}
            border={border ? `1px solid ${GREY_COLOR}` : ''}
            padding={'25px 0'}
        >
            <CommonContainer maxWidth="lg">
                <div className="custom_categories">
                    {categoryData?.map((category, index) => {
                        return (
                            <Stack direction={'row'} spacing={2}>
                                <img
                                    src={category.img}
                                    alt={category.title}
                                    style={{ height: '20px', width: '20px' }}
                                />
                                <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                >
                                    {category.title}
                                </Typography>
                            </Stack>
                        );
                    })}
                </div>
            </CommonContainer>
        </Box>
    );
};

export default CustomCategories;
