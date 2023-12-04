import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { menuItems } from '../../utils/menu-items'
import { bannerHeading, bannerSubHeading, flexCenterStyles } from '../styling'


const CustomCommonBanner = () => {

  const routeName = useLocation().pathname

  const pageTitle = (menuItems.filter(menu => menu.url === routeName))[0].title
  return (
    <Box className="common_banner_section common_margin" sx={flexCenterStyles}>
      <Stack spacing={3}>
        <Typography variant='h3' textTransform='uppercase' sx={bannerHeading}>
          {pageTitle}
        </Typography>
        <Typography variant='body2' sx={bannerSubHeading} textAlign='center'>
          Home / {pageTitle}
        </Typography>
      </Stack>
    </Box >
  )
}

export default CustomCommonBanner