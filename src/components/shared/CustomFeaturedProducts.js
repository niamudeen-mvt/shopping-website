import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { NewArrivalCard } from "../../components/cards/index";
import { newArrivalProductsList } from "../../services/api/product-api";
import { flexSBStyles } from "../styling";
import SelectDropDown from "../dropdown";
import CustomPagination from "./CustomPagination";
import { Link, useLocation } from "react-router-dom";

const CustomFeaturedProducts = ({
  searchResultCount = 8,
  heading,
  showDropDown,
}) => {
  const [productList, setProductList] = useState([]);

  const routeName = useLocation()?.pathname;

  useEffect(() => {
    (async () => {
      const data = await newArrivalProductsList(searchResultCount);
      setProductList(data);
    })();
  }, []);

  return (
    <Box className="common_margin">
      {showDropDown ? (
        <Box sx={flexSBStyles}>
          <Typography
            component={"p"}
            fontSize={"14px"}
            fontWeight={"500px"}
            lineHeight={"26.5px"}
          >
            Showing 11 of 11 products
          </Typography>
          <SelectDropDown width="164px" height="36px" defaultValue="Featured" />
        </Box>
      ) : null}
      <Grid container mt={4} spacing={3}>
        {productList?.length
          ? productList?.map((product, index) => {
            return (
              <Grid key={index} item md={3} xs={12}>
                <Link to={`/product-page`}>
                  <NewArrivalCard
                    product={product}
                    heading={heading}
                    showLabel={index === 1 || index === 7 ? true : false}
                  />
                </Link>
              </Grid>
            );
          })
          : "No Products"}
      </Grid>
      {routeName === "/product-page" ? null : <CustomPagination />}
    </Box>
  );
};

export default CustomFeaturedProducts;
