import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const ImageGallery = () => {
    return (
        <Box className="common_section_margin common_margin">
            <Container>
                <div className="text_center">
                    <Typography className="common_section_heading text_center">
                        Express yourself with
                        <br />
                        #TheDrops255 on instagram
                    </Typography>
                </div>
                <Box mt={5}>
                    <Grid container spacing={2}>
                        {itemData?.map((e) => {
                            return (
                                <Grid item xs={12} md={3}>
                                    <img
                                        srcSet={`${e.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${e.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt={e.title}
                                        loading="lazy"
                                        className="image_gallery_img"
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default ImageGallery;

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },

    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
];
