import React, { useEffect } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { NewArrivalCard } from '../../../components/cards'
import { newArrivalProductsList } from '../../../services/api/product-api'

const NewArrivalPage = () => {

  useEffect(() => {
    const data = newArrivalProductsList()
    console.log(data, "data <<<<<<<<<<<<<<<<<");
  }, [])
  return (
    <Box className='common_section'>
      <Container className='drop_section_container'>
        <div className='text_center'>
          <Typography variant='h3'>The Drops Collection</Typography>
          <Typography variant='subtitle2'>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</Typography>
        </div>
        <Grid container mt={4} spacing={3}>
          <Grid xs={12} md={6} item>
            <NewArrivalCard />
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}

export default NewArrivalPage