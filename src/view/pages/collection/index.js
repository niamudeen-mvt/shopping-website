import {
  Box,
  Container,
  Grid,
  Typography,
  Pagination,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import defaultImg from "../../../assets/images/Accessories-img.png";
import CustomCommonBanner from "../../../components/shared/CustomCommonBanner";
import CustomCategories from "../../../components/shared/CustomCategoires";

const collections = [
  {
    id: 1,
    title: "Accessories",
    img: defaultImg,
  },
  {
    id: 2,
    title: "Home & Decor",
    img: defaultImg,
  },
  {
    id: 3,
    title: "Best Seller",
    img: defaultImg,
  },
  {
    id: 4,
    title: "New Arrivals",
    img: defaultImg,
  },
  {
    id: 5,
    title: "Electronic",
    img: defaultImg,
  },
  {
    id: 6,
    title: "Phone Case",
    img: defaultImg,
  },
  {
    id: 7,
    title: "Kitchen",
    img: defaultImg,
  },
  {
    id: 8,
    title: "Lifestyle",
    img: defaultImg,
  },
];


const CollectionPage = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <CustomCommonBanner />
      <Box mb={10}>
        <Container maxWidth="lg">
          <Grid container rowGap={3} columnSpacing={3}>
            {collections.map((menu, index) => {
              return (
                <Grid key={menu.id} item xs={12} sm={12} md={6} lg={4}>
                  <Box maxWidth="386px" mx={"auto"}>
                    <img src={defaultImg} alt="defautl-img" />
                    <Typography
                      textAlign="center"
                      variant="h5"
                      fontStyle="normal"
                      fontWeight={500}
                      lineHeight="59px"
                    >
                      {menu.title}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Stack spacing={2} marginTop={8} className="flex_center">
            <Pagination count={3} hidePrevButton />
          </Stack>
        </Container>
      </Box>
      <CustomCategories border />
      <Box mb={10}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            mb={6}
            textAlign="center"
            fontWeight={700}
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
    </>
  );
};

export default CollectionPage;
