import { Box, Grid } from '@mui/material';
import CustomCommonBanner from '../../../components/shared/CustomCommonBanner';
import CommonContainer from '../../../components/container';
import productImg from '../../../assets/images/Accessories-img.png';
import CommonContentSecion from '../../../components/shared/CommonContentSecion';
import CustomContentBar from '../../../components/shared/CustomContentBar';
import contentbarImg from '../../../assets/images/about-us-contentbar-img.png';
import CustomCategories from '../../../components/shared/CustomCategoires';
import CustomDrops from '../../../components/shared/CustomDrops';
import CustomSocial from '../../../components/shared/CustomSocial';

import facebookSvg from '../../../assets/icons/fb.svg';
import instaSvg from '../../../assets/icons/insta.svg';
import musicSvg from '../../../assets/icons/music.svg';

const socialIconList = [
    {
        id: 1,
        title: '@TheDrops',
        img: facebookSvg,
    },
    {
        id: 2,
        title: '@TheDrops255',
        img: instaSvg,
    },
    {
        id: 3,
        title: '@TheDrops255',
        img: musicSvg,
    },
];

const AboutUsPage = () => {
    return (
        <>
            <CustomCommonBanner />
            <Box className="common_margin">
                <CommonContainer
                    maxWidth="lg"
                    className="common_section_height"
                >
                    <Grid container spacing={10}>
                        <Grid xs={12} md={6} item>
                            <Box maxWidth={'588px'}>
                                <img
                                    src={productImg}
                                    alt="drop-collection-img1"
                                />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={6} item>
                            <Box>
                                <CommonContentSecion
                                    heading={`The Drops, We Craft Awesome With  Great Experiences.`}
                                    subheading="The Drops is an online retailer that offers top quality products at competitive prices. we offer Free Fast Worldwide Shipping to all customers. "
                                    btnColor="#4175BD"
                                    btnText={'Contact Us'}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </CommonContainer>
            </Box>
            <CustomContentBar
                barcolor={'#E7E5E1'}
                heading={'Amazing offer'}
                subheading={
                    'Use our Code Shop15 for 15 percent off your order. $50 or more '
                }
                btnText="Shop Now"
                btncolor="#4175BD"
                contentbarImg={contentbarImg}
            />
            <CustomSocial
                heading={'Check us out'}
                socialIconList={socialIconList}
            />

            <CustomCategories border={true} />
            <CustomDrops />
        </>
    );
};

export default AboutUsPage;
