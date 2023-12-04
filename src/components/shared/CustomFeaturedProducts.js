import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { NewArrivalCard } from "../../components/cards/index";
import { newArrivalProductsList } from "../../services/api/product-api";

const CustomFeaturedProducts = ({ searchResultCount = 8 }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await newArrivalProductsList(searchResultCount);
      setProductList(data);
    })();
  }, []);

  return (
    <Box>
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
    </Box>
  );
};

export default CustomFeaturedProducts;
