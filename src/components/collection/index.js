import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

import dropCollectionImg1 from "../../assets/images/drop-collection-img1.png"
import dropCollectionImg2 from "../../assets/images/drop-collection-img2.png"



const ContentSection = ({ heading }) => {
  return (
    <div className='text_center '>
      <Typography variant='subtitle1' mb={1}>{heading}</Typography>
      <Typography variant='body1' mb={2} className=' text_center'>You just want something new to spice up<br /> your door</Typography>
      <Button variant='contained' className='rounded_btn' mb={1}>Shop Now</Button>
    </div>
  )
}

const DropCollection = () => {
  return (
    <Box className='common_section'>
      <Container className='drop_section_container'>
        <div className='text_center'>
          <Typography variant='h3'>The Drops Collection</Typography>
          <Typography variant='subtitle2'>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</Typography>
        </div>
        <Grid container mt={4} spacing={3}>
          <Grid xs={12} md={6} item>
            <Box mb={3}>
              <img src={dropCollectionImg1} alt="drop-collection-img1" />
            </Box>
            <ContentSection heading="Accessories" />
          </Grid>
          <Grid xs={12} md={6} item>
            <ContentSection heading="Home & Decor " />
            <Box mt={3}>
              <img src={dropCollectionImg2} alt="drop-collection-img2" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}

export default DropCollection