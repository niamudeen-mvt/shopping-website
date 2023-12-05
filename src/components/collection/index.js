import React from 'react';
import { Box, Container, Grid } from '@mui/material';

import dropCollectionImg1 from '../../assets/images/drop-collection-img1.png';
import dropCollectionImg2 from '../../assets/images/drop-collection-img2.png';
import CommonHeadingBox from '../shared/CommonHeadingBox';
import CommonContentSecion from '../shared/CommonContentSecion';

const DropCollection = () => {
    return (
        <Box className="common_margin">
            <Container className="common_section_height">
                <CommonHeadingBox heading="The Drops Collection" />
                <Grid container mt={4} spacing={3}>
                    <Grid xs={12} md={6} item>
                        <Box mb={3}>
                            <img
                                src={dropCollectionImg1}
                                alt="drop-collection-img1"
                            />
                        </Box>
                        <CommonContentSecion heading="Accessories" />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <CommonContentSecion heading="Home & Decor " />
                        <Box mt={3}>
                            <img
                                src={dropCollectionImg2}
                                alt="drop-collection-img2"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DropCollection;
