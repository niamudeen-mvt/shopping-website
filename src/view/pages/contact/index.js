import React, { useState } from 'react'
import CustomCommonBanner from '../../../components/shared/CustomCommonBanner'
import CustomCategories from '../../../components/shared/CustomCategoires'
import CustomDrops from '../../../components/shared/CustomDrops'
import { Box, Checkbox, Grid, Stack, TextField, Typography } from '@mui/material'
import CommonContainer from '../../../components/container'
import CustomButton from '../../../components/shared/CustomButton'

import phoneSvg from "../../../assets/icons/icon _phone call_.svg"
import { defaultBorder } from '../../../components/styling'



const CommonHeading = ({ text, mb }) => {
  return <Typography variant='h5' fontSize={26} fontWeight={500} marginBottom={'16px'}>
    {text}
  </Typography>
}
const CommonDescription = ({ text, mb }) => {
  return <Typography variant='subtitle1' marginBottom={mb ? '32px' : '0'} fontSize={18} fontWeight={400} lineHeight={'24px'} color={'#000000'}>
    {text}
  </Typography>
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ContactPage = () => {

  const [user, setUser] = useState({
    name: '',
    email: "",
    message: ""
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }
  return (
    <>
      <CustomCommonBanner />
      <Box className="common_margin">
        <CommonContainer maxWidth='lg'>
          <Grid container spacing={10}>
            <Grid item xs={12} md={8} >
              <Box>
                <CommonHeading text="We would love to hear from you." />
                <CommonDescription text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" mb={true} />
                <Box>
                  <Stack direction={'row'} spacing={3} marginBottom={'16px'}>
                    <TextField placeholder='Name' sx={{
                      flex: 1,
                    }}
                      name='name'
                      value={user.name}
                      onChange={handleChange}
                    />
                    <TextField placeholder='Email' sx={{ flex: 1 }}
                      name='email'
                      value={user.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <TextField placeholder='Message' sx={{
                    flex: 1, marginBottom: '16px', width: '100%'
                  }} multiline rows={9}
                    name='message'
                    value={user.message}
                    onChange={handleChange}
                  />
                  <Stack direction={'row'} marginBottom={'32px'} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
                    <Checkbox {...label} />
                    <CommonDescription text="Save my name, email, and website in this browser for the next time I comment." mb={false} />
                  </Stack>
                  <CustomButton text="Submit Now" bgColor={'#4175BD'} borderRadius={'26px'} width='166px' height='46px' />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={3} direction={'column'}>
                <Box >
                  <CommonHeading text="Address" />
                  <CommonDescription text="Halifax NS B3K 3N7, Canada" />
                </Box>
                <Box >
                  <CommonHeading text="Contact Information" />
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <img src={phoneSvg} alt="icon" style={{ height: '16px', width: '16px' }} />
                    <CommonDescription text="9022107764" />
                  </Stack>
                </Box>
                <Box >
                  <CommonHeading text="Social Media" />
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <img src={phoneSvg} alt="icon" style={{ height: '16px', width: '16px' }} />
                    <CommonDescription text="@TheDrops" />
                  </Stack>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <img src={phoneSvg} alt="icon" style={{ height: '16px', width: '16px' }} />
                    <CommonDescription text="@TheDrops" />
                  </Stack>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <img src={phoneSvg} alt="icon" style={{ height: '16px', width: '16px' }} />
                    <CommonDescription text="@TheDrops" />
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CommonContainer>
      </Box >
      <CustomCategories border={true} />
      <CustomDrops />
    </>
  )
}

export default ContactPage