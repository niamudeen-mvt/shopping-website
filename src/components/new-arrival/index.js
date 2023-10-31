import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { NewArrivalCard } from "../../components/cards/index"
import { newArrivalProductsList } from '../../services/api/product-api'

const NewArrivalPage = () => {
  const [productList, setProductList] = useState([])
  let searchResultCount = 4
  useEffect(() => {
    (async () => {
      const data = await newArrivalProductsList(searchResultCount)
      setProductList(data)
    })()
  }, [])

  return (
    <Box className="common_section_margin">
      <Container >
        <div className='text_center'>
          <Typography className='common_section_heading text_center'>New Arrivals</Typography>
          <Typography variant='body1' className='text_center'>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</Typography>
        </div>
        <Grid container mt={4} spacing={3}>
          {
            productList?.length ?
              productList?.map((product, index) => {
                return (
                  <Grid key={index} item md={3} xs={12}>
                    <NewArrivalCard product={product} />
                  </Grid>
                )
              }) : "No Products"
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default NewArrivalPage