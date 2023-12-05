import Grid from '@mui/material/Grid';
import React from 'react';
import { Container } from '@mui/material';
import { Box, Button, Container, Typography } from '@mui/material';

export const ResponsiveLayout = () => {
    return (
        <Container maxWidth="xl">
            <div>
                <Grid container spacing={4}>
                    {Array.from({ length: 6 }).map((_, i) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                lg={4}
                                key={i + 1}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {/* cards */}
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </Container>
    );
};

const Homepage = () => {
    return (
        <Container maxWidth="xl">
            <Grid container sx={{ minHeight: '500px' }}>
                <Grid item xs={12} md={6} className="">
                    <Box
                        className="b1"
                        height="100%"
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <div>
                            <Typography variant="h5" gutterBottom>
                                New Arrivals
                            </Typography>
                            <Typography variant="h3" gutterBottom>
                                Shockwave Protection <br /> Case
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                You just want something new to spice up your
                                door
                            </Typography>
                            <Button variant="contained" disableElevation>
                                <Typography variant="body1">
                                    shop now
                                </Typography>
                            </Button>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className="">
                    <Box className="b1" height="100%" width="100%">
                        <img
                            src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1"
                            alt="img"
                            height="100%"
                            width="100%"
                            style={{ objectFit: 'contain' }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Homepage;
