import React from "react";
import { Box } from "@mui/material";
import CommonHeadingBox from "../shared/CommonHeadingBox";
import CustomFeaturedProducts from "../shared/CustomFeaturedProducts";
import CommonContainer from "../container";

const NewArrivalPage = () => {
  return (
    <Box className="common_section_margin ">
      <CommonContainer maxWidth="lg">
        <CommonHeadingBox heading="New Arrivals" />
        <CustomFeaturedProducts searchResultCount={4} />
      </CommonContainer>
    </Box>
  );
};

export default NewArrivalPage;
