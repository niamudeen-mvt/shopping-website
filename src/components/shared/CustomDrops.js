import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import defaultImg from "../../assets/images/Accessories-img.png";


const CustomDrops = () => {
  return (
    <Box mb={10}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          mb={6}
          textAlign="center"
          lineHeight="47.5px"
        >
          Express yourself with <br /> #TheDrops255 on instagram
        </Typography>
        <Grid container spacing={2}>
          {Array.from({ length: 8 }).map((menu, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Box mx={"auto"} maxWidth="287px">
                  <img src={defaultImg} alt="default-img" />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default CustomDrops