import { Box, Typography } from "@mui/material";
import React from "react";

const CommonHeadingBox = ({ heading, subheading }) => {
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
    <Box>
      <Typography variant="h4" sx={headingStyles}>
        {heading}
      </Typography>
      <Typography variant="body1" sx={subheadingStyles}>
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
      </Typography>
    </Box>
  );
};

export default CommonHeadingBox;
