import React, { useEffect, useState } from 'react'
import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { NewArrivalCard } from "../cards/index"
import { newArrivalProductsList } from '../../services/api/product-api'
import { flexCenterStyles, flexSBStyles } from '../styling'
import CustomPagination from './CustomPagination'
import { useLocation } from 'react-router-dom'
import SelectDropDown from '../dropdown'

const CustomFeaturedSection = ({
  heading,
  searchResultCount = 8,
  showDropDown
}) => {

  const routeName = useLocation()?.pathname
  const [productList, setProductList] = useState([])

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {
    (async () => {
      const data = await newArrivalProductsList(searchResultCount)
      setProductList(data)
    })()
  }, [])
  return (
    <Box className="common_section_margin common_margin">
      <Container className=''>
        {
          heading ?
            <Typography className='common_section_heading text_center'>{heading}</Typography>
            : null}
        {/* <div className='text_center'>
          <Typography className='common_section_heading text_center'>Featured Product</Typography>
          <Typography variant='body1' className='text_center'>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</Typography>
        </div> */}
        {
          showDropDown ?
            <Box sx={flexSBStyles}>
              <Typography component={'p'} fontSize={'14px'} fontWeight={'500px'} lineHeight={'26.5px'}>Showing 11 of 11 products</Typography>
              <SelectDropDown width="164px" height="36px" defaultValue="Featured" />
            </Box>
            : null
        }
        <Grid container mt={4} spacing={3}>
          {
            productList?.length ?
              productList?.map((product, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={flexCenterStyles} >
                    <NewArrivalCard product={product} />
                  </Grid>
                )
              }) : "No Products"
          }
        </Grid>
      </Container>
      {
        routeName === "/product-page" ?
          null :
          <CustomPagination />
      }
    </Box>
  )
}

export default CustomFeaturedSection