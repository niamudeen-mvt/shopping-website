import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../components/shared/CustomButton";
import CommonContainer from "../container";
import { flexCenterStyles } from "../styling";

const CustomContentBar = ({
  barcolor,
  heading,
  subheading,
  minHeight = 518,
  btnText = "Shop Now",
  contentbarImg,
  bgImg
}) => {


  const textBoldStyles = {
    fontWeight: 'bold'
  }
  return (
    <Box minHeight={minHeight} className="common_margin" bgcolor={barcolor} padding={'25px 0'} position={'relative'}>
      <img src={bgImg} alt="background-img" style={{ position: 'absolute', inset: '0', zIndex: '-1' }} />
      <CommonContainer maxWidth="lg">
        <Grid container spacing={2} sx={{ minHeight: "610px" }}>
          <Grid item xs={12} md={6} sx={flexCenterStyles}>
            <Stack spacing={3}>
              <Typography variant="h2">
                {heading}
              </Typography>
              {
                subheading ?
                  <Typography variant="subtitle1">
                    {subheading}</Typography>
                  :
                  <Typography variant="body1" fontWeight={400} fontSize={22} lineHeight={'34px'}>
                    `Use our Code <span style={textBoldStyles}>Shop15</span> for <span style={textBoldStyles}>15 percent off</span> your order. <span style={textBoldStyles}>$50</span> or more`
                  </Typography>
              }
              <Box>
                <CustomButton
                  text={btnText}
                  height="53px"
                  textStyle="capitalize"
                  fontSize="18px"
                  fontWeight="400px"
                  bgColor="#4175BD"
                />
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} >
            <Box>
              <img src={contentbarImg} alt="content-main" />
            </Box>
          </Grid>
        </Grid>
      </CommonContainer>
    </Box>
  )
}

export default CustomContentBar