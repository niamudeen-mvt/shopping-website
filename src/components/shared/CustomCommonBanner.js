import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { menuItems } from '../../utils/menu-items';
import { flexCenterStyles } from '../styling';


import img1 from "../../assets/images/banner-overlya-img1.svg"
import img2 from "../../assets/images/banner-watch.svg"
import useMui from '../../hooks/useMui';

const CustomCommonBanner = () => {
    const routeName = useLocation().pathname;
    const { MD } = useMui()

    const pageTitle = menuItems.filter((menu) => menu.url === routeName)[0]
        .title;
    return (
        <Box
            className="common_margin"
            sx={flexCenterStyles}
            minHeight={'284px'}
            bgcolor={'#E7E5E1'}
            position={'relative'}
        >
            <Stack spacing={3}>
                <Typography
                    variant="h3"
                    lineHeight={'normal'}
                    textTransform="uppercase"
                >
                    {pageTitle}
                </Typography>
                <Typography variant="body2" fontWeight={500} textAlign="center">
                    Home / {pageTitle}
                </Typography>
            </Stack>
            {
                MD ?
                    <>
                        <img src={img1} alt="img1" style={{ position: 'absolute', top: '50px', left: '58px', maxWidth: '255px', height: '222px' }} />
                        <img src={img2} alt="img2" style={{ position: 'absolute', top: '0', right: '80px', maxWidth: '209px', height: '270px' }} />
                    </>
                    :
                    null}

        </Box>
    );
};

export default CustomCommonBanner;
