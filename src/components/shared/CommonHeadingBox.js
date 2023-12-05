import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const CommonHeadingBox = ({ heading, subheading, mb = '0' }) => {
  const routeName = useLocation()?.pathname;
  const subheadingStyles = {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "59px",
    textTransform: "capitalize",
    fontStyle: "normal",
    textAlign: "center",
  };
  const headingStyles = {
    fontSize: "30px",
    fontWeight: "700",
    // lineHeight: "59px",
    textTransform: "capitalize",
    fontStyle: "normal",
    textAlign: "center",
  };
  return (
    <Box sx={{ marginBottom: mb }}>
      <Typography variant="h4" sx={headingStyles}>
        {heading}
      </Typography>
      {routeName === "/product-page" ? null : (
        <Typography variant="body1" sx={subheadingStyles}>
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore
        </Typography>
      )}
    </Box>
  );
};

export default CommonHeadingBox;
