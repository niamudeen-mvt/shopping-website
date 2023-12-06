import { Box } from '@mui/material';
import CommonHeadingBox from '../shared/CommonHeadingBox';
import CommonContainer from '../shared/container';
import CustomFeaturedProducts from '../shared/CustomFeaturedProducts';

const FeaturedProducts = () => {
    return (
        <Box className="common_section_margin">
            <CommonContainer maxWidth="lg">
                <CommonHeadingBox heading="Featured Product" mb="30px" />
                <CustomFeaturedProducts
                    searchResultCount={8}
                    heading={'Featured Product'}
                />
            </CommonContainer>
        </Box>
    );
};

export default FeaturedProducts;
