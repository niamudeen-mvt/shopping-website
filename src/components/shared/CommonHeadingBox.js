import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const CommonHeadingBox = ({ heading, subheading, mb = '0' }) => {
  const routeName = useLocation()?.pathname;
  const subheadingStyles = {
    lineHeight: "59px",
    textTransform: "capitalize",
    textAlign: "center",
  };

  return (
    <Box sx={{ marginBottom: mb }}>
      <Typography variant={heading === "The Drops Collection" ? "h3" : "h4"} textAlign={"center"}>
        {heading}
      </Typography>
      {routeName === "/product-page" ? null : (
        <Typography variant="body2" sx={subheadingStyles} textTransform={'capitalize'}>
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore
        </Typography>
      )
      }
    </Box >
  );
};

export default CommonHeadingBox;
