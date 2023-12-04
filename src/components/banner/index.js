import React from 'react'
import { Box, Grid, Typography, Stack, Button } from '@mui/material';
import bannerImage from "../../assets/images/banner-section-img.png"
import useMui from '../../hooks/useMui';

const BannerSection = () => {
  const { SM } = useMui()
  return (
    <Grid container sx={{ minHeight: "500px", bgcolor: "#E7E5E1" }} >
      <Grid item xs={12} md={6} sx={{ padding: SM ? "100px 0" : "0" }}>
        <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
          <Stack
            direction="column"
            justifyContent="left"
            spacing={2}
          >
            <Typography variant="h5" fontStyle={'normal'} fontWeight={400} >
              New Arrivals
            </Typography>
            <Typography variant="h3" fontWeight={700}>
              Shockwave <br />Protection  Case
            </Typography>
            <Typography variant="h5" textTransform={'capitalize'} fontStyle={'normal'} fontWeight={400} >
              You just want something new to spice up <br /> your door
            </Typography>
            <Button>shop now</Button>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} >
        <Box height="100%" width="100%" >
          <img src={bannerImage} alt="img" height="100%" width="100%" style={{ objectFit: 'contain' }} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default BannerSection