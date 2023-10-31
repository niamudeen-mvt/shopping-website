import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import bannerSectionImg from "../../assets/images/banner-section-img.png"


const BannerSection = () => {
  return (
    <Box className="banner_section">
      <Container className='inner_container_width '>
        <Grid container className=' common_section_height'>
          <Grid item xs={12} md={6} className=' flex_start'>
            <Stack spacing={2} className=''>
              <Typography className='title_heading'>New Arrivals</Typography>
              <Typography className='main_heading'>Shockwave <br /> Protection Case</Typography>
              <Typography className='sub_heading'>You just want something new to spice<br />up your door</Typography>
              <Button variant='contained' color='default' className='shop_now_btn' disableFocusRipple>Shop Now</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} className='flex_start'>
            <div className=''>
              <img src={bannerSectionImg} alt='banner-section-img' />

            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default BannerSection