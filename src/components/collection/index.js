import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import dropCollectionImg1 from "../../assets/images/drop-collection-img1.png";
import dropCollectionImg2 from "../../assets/images/drop-collection-img2.png";
import CommonHeadingBox from "../shared/CommonHeadingBox";
import CustomButton from "../shared/CustomButton";

const ContentSection = ({ heading }) => {
  return (
    <div className="text_center ">
      <Typography variant="subtitle1" mb={1}>
        {heading}
      </Typography>
      <Typography variant="body1" mb={2} className=" text_center">
        You just want something new to spice up
        <br /> your door
      </Typography>
      <CustomButton
        text={"Shop Now"}
        height="46px"
        width="155px"
        borderRadius="26px"
        textStyle="capitalize"
        fontSize="18px"
        fontWeight="600px"
      />
    </div>
  );
};

const DropCollection = () => {
  return (
    <Box className="common_section">
      <Container className="common_section_height">
        <CommonHeadingBox heading="The Drops Collection" />
        <Grid container mt={4} spacing={3}>
          <Grid xs={12} md={6} item>
            <Box mb={3}>
              <img src={dropCollectionImg1} alt="drop-collection-img1" />
            </Box>
            <ContentSection heading="Accessories" />
          </Grid>
          <Grid xs={12} md={6} item>
            <ContentSection heading="Home & Decor " />
            <Box mt={3}>
              <img src={dropCollectionImg2} alt="drop-collection-img2" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DropCollection;
