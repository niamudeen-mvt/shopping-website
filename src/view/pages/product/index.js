import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import CommonContainer from '../../../components/container';
import defaultImg from '../../../assets/images/product.png';
import { defaultBorder } from '../../../components/styling';
import useMui from '../../../hooks/useMui';
import CustomButton from '../../../components/shared/CustomButton';
import QuantityIncrementer from '../../../components/shared/CommonQuantityCounter';
import CustomFeaturedProducts from '../../../components/shared/CustomFeaturedProducts';
import CommonHeadingBox from '../../../components/shared/CommonHeadingBox';
import CustomRating from '../../../components/shared/CustomRating';
import CustomLabel from '../../../components/shared/CustomLabel';
import ProductPrice from '../../../components/shared/Product/ProductPrice';
import CustomSelect from '../../../components/shared/CustomSelect';

const CommonContent = ({ heading, description }) => {
    return (
        <Box sx={{ marginBottom: '30px' }}>
            <Typography
                component="p"
                fontSize={'24px'}
                fontWeight={'500px'}
                lineHeight={'47.5px'}
            >
                {heading}
            </Typography>
            <Typography
                component="p"
                fontSize={'18px'}
                fontWeight={'400px'}
                lineHeight={'30px'}
            >
                {description}
            </Typography>
        </Box>
    );
};

const CommonDivider = () => {
    return <Divider sx={{ marginBottom: '20px' }} />;
};

const ProductPage = () => {
    const { MD } = useMui();

    const commonMarginStyles = {
        marginBottom: '30px',
    };
    return (
        <>
            <Box paddingTop="62px" className="common_margin">
                <CommonContainer maxWidth="lg">
                    <Box className="common_margin">
                        <Typography
                            variant="body2"
                            fontWeight={500}
                            sx={{ marginBottom: '71px' }}
                            color={'#8D8D8D'}
                        >
                            Home / New Arrivals /
                        </Typography>
                        <Stack direction={MD ? 'row' : 'column'} spacing={5}>
                            <Box sx={{ flex: 1 }}>
                                <Box sx={commonMarginStyles}>
                                    <img
                                        src={defaultImg}
                                        alt="product-img"
                                        height="100%"
                                        width="100%"
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>

                                <Grid container spacing={3}>
                                    {[1, 2, 3, 4].map((e) => {
                                        return (
                                            <Grid item xs={6} key={e}>
                                                <Box position="relative">
                                                    {e !== 4 ? (
                                                        <CustomLabel
                                                            text={'tuya'}
                                                            width="65px"
                                                            height="25px"
                                                            bgColor={'#ff5722'}
                                                            fontSize={'20px'}
                                                            fontWeight={'bold'}
                                                            lineHeight="14px"
                                                            letterSpacing="2.1px"
                                                            position="top-right"
                                                            textStyle="lowercase"
                                                            top="0"
                                                        />
                                                    ) : null}
                                                    <img
                                                        src={defaultImg}
                                                        alt="product-img"
                                                        style={defaultBorder}
                                                    />
                                                </Box>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography
                                    variant="h3"
                                    gutterBottom
                                    textTransform={'uppercase'}
                                >
                                    Door Lock 2.0
                                </Typography>
                                <CustomRating
                                    count={5}
                                    color={'#FF9000'}
                                    size="medium"
                                />
                                <Stack
                                    direction="row"
                                    spacing={3}
                                    marginBottom={'20px'}
                                >
                                    <ProductPrice />
                                </Stack>
                                <CommonDivider />
                                <Box sx={commonMarginStyles}>
                                    <Typography
                                        variant="body2"
                                        fontWeight={500}
                                        lineHeight={'26.5px'}
                                        gutterBottom
                                    >
                                        Color
                                    </Typography>
                                    <CustomSelect
                                        width={'367px'}
                                        type={'dark'}
                                        options={[
                                            { value: 1, label: 'Silver Type' },
                                        ]}
                                        margin={false}
                                    />
                                </Box>
                                <CommonDivider />
                                <Box sx={commonMarginStyles}>
                                    <Typography
                                        variant="body2"
                                        fontWeight={500}
                                        marginBottom={'16px'}
                                    >
                                        Quantity
                                    </Typography>
                                    <QuantityIncrementer />
                                </Box>
                                <Stack spacing={2} sx={commonMarginStyles}>
                                    <CustomButton
                                        width="365px"
                                        height="40px"
                                        text={'Add to Cart'}
                                        borderRadius={'100px'}
                                        fontSize={'14px'}
                                        fontWeight={'500px'}
                                    />
                                    <CustomButton
                                        width="365px"
                                        height="40px"
                                        text={'Buy it Now'}
                                        borderRadius={'100px'}
                                        fontSize={'14px'}
                                        fontWeight={'500px'}
                                        bgColor={'white'}
                                        textColor={'black'}
                                        border={true}
                                    />
                                </Stack>
                                <CommonDivider />
                                <CommonContent
                                    heading={'Specifications'}
                                    description="Ways To Unlock: APP,Mechanical Keys,Password,Fingerprint Suitable Door Type: Steel Door,Wooden Door Special Features: Support Gateway Material: Zinc alloy"
                                />
                                <CommonDivider />
                                <CommonContent
                                    heading="Free Shipping"
                                    description="Free standard shipping on all orders. for faster times please check delivery options times may vary depending on location."
                                />
                                <CommonDivider />
                                <CommonContent
                                    heading={'Hassle-Free Exchanges'}
                                    description={
                                        'Email us @ TheDrops255@gmail.com regarding damage to items the have arrived. The item was not what you expected. If the product has been used exchanges will not be possible.'
                                    }
                                />
                            </Box>
                        </Stack>
                    </Box>
                    <CommonHeadingBox heading="Similar Products" mb="40px" />
                    <CustomFeaturedProducts
                        searchResultCount="4"
                        showDropDown={false}
                    />
                    <CustomFeaturedProducts
                        searchResultCount="8"
                        showDropDown={true}
                        heading={'review'}
                    />
                </CommonContainer>
            </Box>
        </>
    );
};

export default ProductPage;
