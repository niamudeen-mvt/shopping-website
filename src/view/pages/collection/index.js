import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import defaultImg from '../../../assets/images/Accessories-img.png';
import CustomCommonBanner from '../../../components/shared/CustomCommonBanner';
import CustomCategories from '../../../components/shared/CustomCategoires';
import CustomPagination from '../../../components/shared/CustomPagination';
import CustomDrops from '../../../components/shared/CustomDrops';
import img2 from "../../../assets/images/drop-collection-img1.png"
import img3 from "../../../assets/images/Best Seller.png"
import img4 from "../../../assets/images/drop-collection-img2.png"
import img5 from "../../../assets/images/banner-section-img.png"
import CommonContainer from '../../../components/shared/container';

const collections = [
    {
        id: 1,
        title: 'Accessories',
        img: defaultImg,
    },
    {
        id: 2,
        title: 'Home & Decor',
        img: img2,
    },
    {
        id: 3,
        title: 'Best Seller',
        img: img3,
    },
    {
        id: 4,
        title: 'New Arrivals',
        img: img4,
    },
    {
        id: 5,
        title: 'Electronic',
        img: img5,
    },
    {
        id: 6,
        title: 'Phone Case',
        img: img4,
    },
    {
        id: 7,
        title: 'Kitchen',
        img: defaultImg,
    },
    {
        id: 8,
        title: 'Lifestyle',
        img: img3,
    },
];

const CollectionPage = () => {
    return (
        <>
            <CustomCommonBanner />
            <Box mb={10}>
                <CommonContainer maxWidth="lg">
                    <Grid container rowGap={10} columnSpacing={3} marginBottom={'150px'}>
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
                                    <Box maxWidth="386px" height={'342px'} mx={'auto'}>
                                        <img
                                            src={menu.img}
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
                    <Box>
                        <CustomPagination />
                    </Box>
                </CommonContainer>
            </Box>
            <CustomCategories border={true} />
            <CustomDrops />
        </>
    );
};

export default CollectionPage;
