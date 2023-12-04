import { Box, Button, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import americaFlagIcon from "../../assets/icons/america-flag-icon.svg"


const FooterSection = () => {
  const footerQuickLinks = [
    "My account",
    "Cart",
    "Wishlist",
    "Product Compare"
  ]



  const footerInfoLinks = [
    "Privacy policy",
    "Refund policy",
    "Shipping & Return",
    "Term & conditions"
  ]
  return (
    <Box className="footer_section common_section_margin ">
      <Container className='footer_container'>
        <Typography className='footer_heading  text_center '>
          Fast shipping times! if any information regarding shipping times or order tracking please email us. we will <br /> respond within one business day
        </Typography>

        <Grid container spacing={2} my={5} className=''>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant='subtitle1' mb={3}>
                The Drops
              </Typography>
              <Typography variant='body2'>
                Whether you want to feel safer in your home, your door lock is due for an upgrade, or you just want something new to spice up your door, buying a new door lock i sn't always as simple a proposition as it may seem.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant='subtitle1' mb={3}>
                The Drops
              </Typography>
              <Stack spacing={1}>
                {
                  footerQuickLinks?.map(e => {
                    return (
                      <Link key={e} to="#" className='footer_link'>
                        <Typography variant='body2'>
                          {e}
                        </Typography>
                      </Link>
                    )
                  })
                }
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant='subtitle1' mb={3}>
                Information
              </Typography>
              <Stack spacing={1}>
                {
                  footerInfoLinks?.map(e => {
                    return (
                      <Typography variant='body2'>
                        {e}
                      </Typography>
                    )
                  })
                }
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant='subtitle1' mb={3}>
                Subscribe
              </Typography>
              <Typography variant='body2' mb={3}>
                Enter your email below to be the first to know about new collections and product launches.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box>
        <Container >
          <Grid container spacing={2} mt={5} className=''>
            <Grid item xs={12} md={4}>
              <Stack direction={'row'} spacing={2}>
                <img src={americaFlagIcon} alt="america-flag-icon" />
                <img src={americaFlagIcon} alt="america-flag-icon" />
                <img src={americaFlagIcon} alt="america-flag-icon" />
                <img src={americaFlagIcon} alt="america-flag-icon" />
                <img src={americaFlagIcon} alt="america-flag-icon" />
                <img src={americaFlagIcon} alt="america-flag-icon" />
              </Stack>

            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='body2 flex_center'>
                © The Drops 2022
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction={'row'} spacing={2} className=' flex_end'>
                <Typography variant='body2'>
                  Refund Policy
                </Typography>
                <Typography variant='body2'>
                  Terms and condition
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box >
  )
}

export default FooterSection