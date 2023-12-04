import { Box } from "@mui/material";
import CommonHeadingBox from "../shared/CommonHeadingBox";
import CommonContainer from "../container";
import CustomFeaturedProducts from "../shared/CustomFeaturedProducts";

const FeaturedProducts = () => {
  return (
    <Box className="common_section_margin">
      <CommonContainer maxWidth="lg">
        <CommonHeadingBox heading="Featured Product" />
        <CustomFeaturedProducts
          searchResultCount={8}
          heading={"Featured Product"}
        />
      </CommonContainer>
    </Box>
  );
};

export default FeaturedProducts;
