import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
const CategorySection = () => {

  const categoryData = [
    {
      id: 1,
      icon: LocalShippingOutlinedIcon,
      title: 'Free Delivery'
    },
    {
      id: 2,
      icon: LocalShippingOutlinedIcon,
      title: 'Non-contact shipping'
    },
    {
      id: 3,
      icon: LocalShippingOutlinedIcon,
      title: 'Money back guarntee'
    },
    {
      id: 4,
      icon: ShieldOutlinedIcon,
      title: 'Secure payments'
    },
  ]
  return (
    <Box className="common_section_margin">
      <Container>
        <Grid container spacing={2}>
          {
            categoryData?.map(e => {
              return (
                <Grid item xs={12} md={3}>
                  <Box className="flex_center">
                    <Stack direction={'row'} spacing={2}>
                      <e.icon className='category_icon' />
                      <Typography variant="caption" display="block" gutterBottom>
                        caption text
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default CategorySection