import React from 'react'
import { Stack, Toolbar, Box, Typography, Container } from '@mui/material'
import CustomDropdownMenu from './dropdown'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import facebookIcon from "../assets/icons/fb-icon.svg"
import musicIcon from "../assets/icons/music-icon.svg"

const TopNav = () => {


  return (
    <Box className='default_black'>
      <Container className='container'>
        {/* ============ top nav ============= */}
        <Toolbar className='top_nav'>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={3}>
              <div>
                <img src={facebookIcon} />
              </div>
              <TwitterIcon color='default' />
              <InstagramIcon color='default' />
              <div>
                <img src={musicIcon} />
              </div>

            </Stack>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction={'row'} spacing={1}>
              <Typography variant='subtitle1' sx={{ color: 'red' }}>
                SHOP15
              </Typography>
              <Typography variant='subtitle1' sx={{ color: 'white' }}>
                For 15 Percent Off Your order!
              </Typography>
            </Stack>
          </Box>

          <Stack direction={'row'} spacing={2}>
            <CustomDropdownMenu selectedValue='English' />
            <CustomDropdownMenu selectedValue='USD' />
          </Stack>
        </Toolbar>
      </Container>
    </Box >
  )
}

export default TopNav