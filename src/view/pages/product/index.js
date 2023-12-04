import { Box, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import CommonContainer from "../../../components/container";
import defaultImg from "../../../assets/images/product.png";
import dummyProductImg from "../../../assets/images/Accessories-img.png";
import {
  bannerHeading,
  bannerSubHeading,
  footerheading,
} from "../../../components/styling";
import useMui from "../../../hooks/useMui";
import SelectDropDown from "../../../components/dropdown";
import CustomButton from "../../../components/shared/CustomButton";
import QuantityIncrementer from "../../../components/shared/CommonQuantityCounter";
import CustomFeaturedProducts from "../../../components/shared/CustomFeaturedProducts";
import CommonHeadingBox from "../../../components/shared/CommonHeadingBox";
import CustomRating from "../../../components/shared/CustomRating";

const CommonContent = ({ heading, description }) => {
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <Typography
        component="p"
        fontSize={"24px"}
        fontWeight={"500px"}
        lineHeight={"47.5px"}
      >
        {heading}
      </Typography>
      <Typography
        component="p"
        fontSize={"18px"}
        fontWeight={"400px"}
        lineHeight={"30px"}
      >
        {description}
      </Typography>
    </Box>
  );
};

const ProductPage = () => {
  const { MD } = useMui();

  const commonMarginStyles = {
    marginBottom: "30px",
  };
  return (
    <>
      <Box paddingTop="62px" className="common_margin">
        <CommonContainer maxWidth="lg">
          <Box className="common_margin">
            <Typography component="p" sx={{ marginBottom: "71px" }}>
              Home / New Arrivals /
            </Typography>
            <Stack direction={MD ? "row" : "column"} spacing={5}>
              <Box sx={{ flex: 1 }}>
                <Box sx={commonMarginStyles}>
                  <img
                    src={defaultImg}
                    alt="product-img"
                    height="100%"
                    width="100%"
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Grid container spacing={3}>
                  {[1, 2, 3, 4].map((e) => {
                    return (
                      <Grid item xs={6} key={e}>
                        <img src={dummyProductImg} alt="product-img" />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={bannerHeading}
                  gutterBottom
                  textTransform={"uppercase"}
                >
                  Door Lock 2.0
                </Typography>
                <CustomRating count={5} color={""} />
                <Stack direction="row" spacing={3} sx={commonMarginStyles}>
                  <Typography component={"p"} sx={footerheading}>
                    $54.58
                  </Typography>
                  <Typography component={"p"} sx={footerheading}>
                    $122.00
                  </Typography>
                </Stack>
                <Divider sx={commonMarginStyles} />
                <Box sx={commonMarginStyles}>
                  <Typography component={"p"} sx={bannerSubHeading}>
                    Color
                  </Typography>
                  <SelectDropDown width={"367px"} />
                </Box>
                <Divider sx={commonMarginStyles} />
                <Box sx={commonMarginStyles}>
                  <Typography component={"p"} sx={bannerSubHeading}>
                    Quantity
                  </Typography>
                  <QuantityIncrementer />
                </Box>
                <Stack spacing={2} sx={commonMarginStyles}>
                  <CustomButton
                    width="365px"
                    height="40px"
                    text={"Add to Cart"}
                    borderRadius={"100px"}
                    fontSize={"14px"}
                    fontWeight={"500px"}
                  />
                  <CustomButton
                    width="365px"
                    height="40px"
                    text={"Buy it Now"}
                    borderRadius={"100px"}
                    fontSize={"14px"}
                    fontWeight={"500px"}
                    bgColor={"white"}
                    textColor={"black"}
                    border={true}
                  />
                </Stack>
                <Divider sx={commonMarginStyles} />
                <CommonContent
                  heading={"Specifications"}
                  description="Ways To Unlock: APP,Mechanical Keys,Password,Fingerprint
Suitable Door Type: Steel Door,Wooden Door
Special Features: Support Gateway
Material: Zinc alloy"
                />
                <Divider sx={commonMarginStyles} />
                <CommonContent
                  heading="Free Shipping"
                  description="Free standard shipping on all orders. for faster times please check delivery options times may vary depending on location."
                />
                <Divider sx={commonMarginStyles} />
                <CommonContent
                  heading={"Hassle-Free Exchanges"}
                  description={
                    "Email us @ TheDrops255@gmail.com regarding damage to items the have arrived. The item was not what you expected. If the product has been used exchanges will not be possible."
                  }
                />
              </Box>
            </Stack>
          </Box>
          <CommonHeadingBox heading="Similar Products" />
          <CustomFeaturedProducts searchResultCount="4" showDropDown={false} />
          <CustomFeaturedProducts searchResultCount="8" showDropDown={false} />
        </CommonContainer>
      </Box>
    </>
  );
};

export default ProductPage;
