import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import { NewArrivalCard } from "../../components/cards/index";
import { newArrivalProductsList } from "../../services/api/product-api";
import CommonHeadingBox from "../shared/CommonHeadingBox";

const FeaturedProducts = () => {
  const [productList, setProductList] = useState([]);
  let searchResultCount = 8;
  useEffect(() => {
    (async () => {
      const data = await newArrivalProductsList(searchResultCount);
      setProductList(data);
    })();
  }, []);

  return (
    <Box className="common_section_margin">
      <Container className="">
        <CommonHeadingBox
          heading="Featured Product"
          subheading="consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore"
        />
        <Grid container mt={4} spacing={3}>
          {productList?.length
            ? productList?.map((product, index) => {
                return (
                  <Grid key={index} item md={3} xs={12}>
                    <NewArrivalCard product={product} />
                  </Grid>
                );
              })
            : "No Products"}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
