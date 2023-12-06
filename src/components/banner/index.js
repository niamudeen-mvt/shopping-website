import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import bannerImage from '../../assets/images/banner-section-img.png';
import useMui from '../../hooks/useMui';
import CustomButton from '../shared/CustomButton';

const BannerSection = () => {
    const { SM } = useMui();
    return (
        <Grid
            container
            sx={{ minHeight: '500px', bgcolor: '#E7E5E1', padding: SM ? '0' : '0 25px' }}
            className="common_margin"
        >
            <Grid item xs={12} md={6} sx={{ padding: SM ? '0' : '25px 0' }}>
                <Box
                    height="100%"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack direction="column" justifyContent="left" spacing={2}>
                        <Typography variant="h5" fontSize={SM ? '26px' : '22px'}>New Arrivals</Typography>
                        <Typography variant="h1" fontSize={SM ? '48px' : '40px'}>
                            Shockwave <br />
                            Protection Case
                        </Typography>
                        <Typography variant="h5" fontSize={SM ? '26px' : '22px'}>
                            You just want something new to spice up <br /> your
                            door
                        </Typography>
                        <CustomButton
                            text="shop now"
                            height="53px"
                            width="175px"
                            borderRadius={false}
                            bgColor="white"
                            textColor="black"
                        />
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box height="100%" width="100%">
                    <img
                        src={bannerImage}
                        alt="img"
                        height="100%"
                        width="100%"
                        style={{ objectFit: 'contain' }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default BannerSection;
