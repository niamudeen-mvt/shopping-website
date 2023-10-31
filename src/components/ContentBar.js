import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import mainImage from "../assets/images/content-bar-section-main-img.png"

const ContentBar = () => {
  return (
    <Box className="common_section_margin content_bar_section">
      <Container>
        <Grid container spacing={2} className='' sx={{ minHeight: '610px' }}>
          <Grid item xs={12} md={6} className=' flex_start'>
            <Stack spacing={3} >
              <Typography className='common_section_heading'>Amazing prices and free worldwide shipping on all orders!</Typography>
              <Typography variant='h6'>Whether you want to feel safer in your home, your door lock is due for an upgrade, or you just want something new to spice up your door, buying a new door lock isn't always as simple a proposition as it may seem.
              </Typography>
              <Button variant='contained' className='theme_btn' mb={1}>Shop Now</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <img src={mainImage} alt="content-main-image" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContentBar