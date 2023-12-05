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
            sx={{ minHeight: '500px', bgcolor: '#E7E5E1' }}
            className="common_margin"
        >
            <Grid item xs={12} md={6} sx={{ padding: SM ? '100px 0' : '0' }}>
                <Box
                    height="100%"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack direction="column" justifyContent="left" spacing={2}>
                        <Typography variant="h5">New Arrivals</Typography>
                        <Typography variant="h1">
                            Shockwave <br />
                            Protection Case
                        </Typography>
                        <Typography variant="h5">
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
