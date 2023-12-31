import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { NewArrivalCard } from './NewArrivalCard';
import { newArrivalProductsList } from '../../services/api/product-api';
import { flexSBStyles } from '../styling';
import CustomPagination from './CustomPagination';
import { Link, useLocation } from 'react-router-dom';
import CustomRating from './CustomRating';
import TuneIcon from '@mui/icons-material/Tune';
import productImg2 from '../../assets/images/product2.png';
import ProductPageCard from './Product/ProductPageCard';
import useMui from '../../hooks/useMui';
import CustomSelect from './CustomSelect';
import CustomLoader from './CustomLoader';

const productDetails = {
    id: 1,
    customer: 'James hold',
    date: '13 Sep, 2022',
    rating: 5,
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    image: productImg2,
};

const CustomFeaturedProducts = ({
    searchResultCount = 8,
    heading,
    showDropDown,
}) => {
    const [productList, setProductList] = useState([]);
    const { SM } = useMui();

    const routeName = useLocation()?.pathname;

    useEffect(() => {
        (async () => {
            const data = await newArrivalProductsList(searchResultCount);
            setProductList(data);
        })();
    }, [searchResultCount]);

    const reviewHeadingStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: SM ? 'row' : 'column',
    };

    return (
        <Box className="common_margin">
            {showDropDown && routeName !== '/product-page' ? (
                <Box sx={flexSBStyles} marginBottom={'40px'}>
                    <Typography
                        component={'p'}
                        fontSize={'14px'}
                        fontWeight={'500px'}
                        lineHeight={'26.5px'}
                    >
                        Showing 11 of 11 products
                    </Typography>

                    <CustomSelect
                        type="dark"
                        defaultValue={3}
                        width="164px"
                        options={[{ value: 1, label: 'Featured' }]}
                    />
                </Box>
            ) : null}

            {showDropDown && routeName === '/product-page' ? (
                <Box sx={reviewHeadingStyles} marginBottom={'84px'}>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        alignItems={'center'}
                        marginBottom={SM ? 0 : '20px'}
                    >
                        <CustomRating
                            count={5}
                            size="medium"
                            color={'#FF9000'}
                        />
                        <CustomSelect
                            type="dark"
                            defaultValue={3}
                            width="150px"
                            border={false}
                            options={[{ value: 1, label: '20 reviews' }]}
                        />
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <Box
                            sx={{
                                border: '1px solid #D9D9D9',
                                height: '36px',
                                width: '115px',
                                borderRadius: '6px',
                            }}
                            display="flex"
                            justifyContent={'center'}
                            alignItems={'center'}
                            fontSize={'14px'}
                            fontWeight={'500'}
                            lineHeight={'26.5px'}
                            textStyle="capitalize"
                        >
                            Write a review
                        </Box>
                        <Button
                            sx={{
                                border: '1px solid #D9D9D9',
                                height: '36px',
                                width: '36px',
                                borderRadius: '6px',
                            }}
                        >
                            <TuneIcon sx={{ color: '#0D0D0D' }} />
                        </Button>
                    </Stack>
                </Box>
            ) : null}
            <Grid container spacing={2}>
                {productList?.length
                    ? productList?.map((product, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                display="flex"
                                justifyContent={'center'}
                            >
                                <Link to={`/product-page`}>
                                    {routeName === '/product-page' &&
                                        heading === 'review' ? (
                                        <ProductPageCard
                                            product={productDetails}
                                            heading={heading}
                                            showLabel={
                                                index === 1 || index === 7
                                                    ? true
                                                    : false
                                            }
                                        />
                                    ) : (
                                        <NewArrivalCard
                                            product={product}
                                            heading={heading}
                                            showLabel={
                                                index === 1 || index === 7
                                                    ? true
                                                    : false
                                            }
                                        />
                                    )}
                                </Link>
                            </Grid>
                        );
                    })
                    : <CustomLoader />}
            </Grid>
            {routeName === '/product-page' ? null : <CustomPagination />}
        </Box>
    );
};

export default CustomFeaturedProducts;
