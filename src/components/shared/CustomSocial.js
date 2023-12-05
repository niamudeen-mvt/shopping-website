import React from 'react'
import CommonContainer from '../container';
import { Box, Stack, Typography } from '@mui/material';
import { flexCenterStyles } from '../styling';
import productImg1 from "../../assets/images/banner-section-img.png"
import useMui from '../../hooks/useMui';


const CustomSocial = ({ heading, socialIconList }) => {
  const { LG, MD } = useMui()
  return (
    <Box mb={10}>
      <CommonContainer maxWidth="lg">
        <Typography
          variant="h2"
          mb={6}
          textAlign="center"
          lineHeight="47.5px"
        >
          {heading}
        </Typography>
        <Stack direction={MD ? 'row' : 'column'} spacing={8} justifyContent={'center'} >
          {socialIconList?.map((social, index) => {
            return (
              <Box key={social.id} sx={{ ...flexCenterStyles, flexDirection: 'column' }}>
                <Box height={'176px'} width={'176px'} sx={flexCenterStyles} marginBottom={'16px'} border="1px solid #D9D9D9">
                  <img src={social.img} alt="social" style={{ height: '48px', width: '48px' }} />
                </Box>
                <Typography variant='body2' lineHeight={'24px'} textAlign={'center'}>{social?.title}</Typography>
              </Box>
            );
          })}
        </Stack>
      </CommonContainer>
      <CommonContainer maxWidth='xl'>
        <Box bgcolor={'#E7E5E1'} minHeight={284} sx={flexCenterStyles} marginTop={'100px'} position={'relative'}>
          {
            LG ?
              <Box maxWidth="255px" position={'absolute'} top={58} left={0} bottom={0}>
                <img src={productImg1} alt="product" />
              </Box>
              : null
          }
          <Typography variant='body2' lineHeight={'24px'} textAlign={'center'} color={'#000000'}>
            For any information regarding your order please send an email<br /> to <span style={{ fontWeight: 'bold' }}>TheDrops255@gmail.com</span> we will respond to your email<br /> within one business day
          </Typography>
          {
            LG ?
              <Box maxWidth="255px" position={'absolute'} top={0} right={0}>
                <img src={productImg1} alt="product" />
              </Box>
              : null
          }
        </Box>
      </CommonContainer>
    </Box >
  )
}

export default CustomSocial
