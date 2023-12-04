import { Box, Divider, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import CommonContainer from '../../../components/container'
import defaultImg from "../../../assets/images/product.png";
import CustomFeaturedSection from '../../../components/shared/CustomFeaturedSection';
// import CustomButton from '../../../components/shared/CustomButton';
// import CustomDropDown from '../../../components/shared/CustomDropDown';
import dummyProductImg from "../../../assets/images/Accessories-img.png";
import { bannerHeading, footerheading } from '../../../components/styling';
import useMui from '../../../hooks/useMui';
import SelectDropDown from '../../../components/dropdown';

const CommonHeadingBox = () => {
  return (
    <Box sx={{ marginBottom: '30px' }}>
      <Typography component='p' fontSize={'24px'} fontWeight={'500px'} lineHeight={'47.5px'}>Specifications</Typography>
      <Typography component='p' fontSize={'18px'} fontWeight={'400px'} lineHeight={'30px'}>Ways To Unlock: APP,Mechanical Keys,Password,Fingerprint
        Suitable Door Type: Steel Door,Wooden Door
        Special Features: Support Gateway
        Material: Zinc alloy</Typography>
    </Box >
  )
}

const ProductPage = () => {
  const { MD } = useMui()
  return (
    <>
      <Box paddingTop='62px' className="common_margin">
        <CommonContainer maxWidth='lg'>
          <Typography component='p' sx={{ marginBottom: '71px' }}>Home / New Arrivals /</Typography>
          <Stack direction={MD ? 'row' : 'column'} spacing={5}>
            <Box sx={{ flex: 1 }}>
              <img src={defaultImg} alt="product-img" height="100%" width="100%" style={{ objectFit: 'contain' }} />
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                  [1, 2, 3, 4].map(e => {
                    return (
                      <Grid item xs={6} key={e}>
                        <img src={dummyProductImg} alt="product-img" />
                      </Grid>
                    )
                  })
                }
              </Grid>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={bannerHeading} gutterBottom>
                Door Lock 2.0
              </Typography>
              <Rating />
              <Stack direction='row' spacing={3} sx={{ marginBottom: '30px' }}>
                <Typography component={'p'} sx={footerheading}>
                  $54.58
                </Typography>
                <Typography component={'p'} sx={footerheading} >
                  $122.00
                </Typography>
              </Stack>
              <Divider sx={{ marginBottom: '30px' }} />
              <Box>
                <Typography component={'p'} sx={footerheading}>
                  Color
                </Typography>
                <SelectDropDown width={'367px'} />
              </Box>
              <Divider sx={{ marginBottom: '30px' }} />
              <CommonHeadingBox />
              <Divider sx={{ marginBottom: '30px' }} />
            </Box>
          </Stack>
        </CommonContainer>


        <CustomFeaturedSection heading="Similar Products" searchResultCount="4"
          showDropDown={false} />
        <CustomFeaturedSection />
      </Box>
    </>
  )
}

export default ProductPage