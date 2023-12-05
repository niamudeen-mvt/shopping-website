import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import defaultImg from '../../../assets/images/Accessories-img.png';
import CustomCommonBanner from '../../../components/shared/CustomCommonBanner';
import CustomCategories from '../../../components/shared/CustomCategoires';
import CustomPagination from '../../../components/shared/CustomPagination';
import CustomDrops from '../../../components/shared/CustomDrops';

const collections = [
    {
        id: 1,
        title: 'Accessories',
        img: defaultImg,
    },
    {
        id: 2,
        title: 'Home & Decor',
        img: defaultImg,
    },
    {
        id: 3,
        title: 'Best Seller',
        img: defaultImg,
    },
    {
        id: 4,
        title: 'New Arrivals',
        img: defaultImg,
    },
    {
        id: 5,
        title: 'Electronic',
        img: defaultImg,
    },
    {
        id: 6,
        title: 'Phone Case',
        img: defaultImg,
    },
    {
        id: 7,
        title: 'Kitchen',
        img: defaultImg,
    },
    {
        id: 8,
        title: 'Lifestyle',
        img: defaultImg,
    },
];

const CollectionPage = () => {
    return (
        <>
            <CustomCommonBanner />
            <Box mb={10}>
                <Container maxWidth="lg">
                    <Grid container rowGap={3} columnSpacing={3}>
                        {collections.map((menu, index) => {
                            return (
                                <Grid
                                    key={menu.id}
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                >
                                    <Box maxWidth="386px" mx={'auto'}>
                                        <img
                                            src={defaultImg}
                                            alt="defautl-img"
                                        />
                                        <Typography
                                            textAlign="center"
                                            variant="h5"
                                            lineHeight="59px"
                                            fontWeight={500}
                                        >
                                            {menu.title}
                                        </Typography>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <CustomPagination />
                </Container>
            </Box>
            <CustomCategories border={true} />
            <CustomDrops />
        </>
    );
};

export default CollectionPage;
