import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const CommonBanner = () => {
  return (
    <Box className="common_banner_section flex_center">
      <Stack spacing={3}>
        <Typography variant='h3'>
          About Us
        </Typography>
        <Typography variant='body2' className='text_center'>
          Home / About
        </Typography>
      </Stack>
    </Box>
  )
}

export default CommonBanner