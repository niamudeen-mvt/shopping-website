import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CommonHeadingBox from '../shared/CommonHeadingBox';
import CustomButton from '../shared/CustomButton';
import { flexCenterStyles } from '../styling';
import CommonContainer from '../container';
import CustomRating from '../shared/CustomRating';

const TestimonialSection = () => {
    const testimonialData = [
        {
            id: 1,
            ratingCount: 5,
            feedback:
                'Just bought the handle and could adapt in a machine pated have not had the same measures of my door. Had only make 2 holes machine with a drill to make installation. Gave a little D and work, but the result was great.',
            author: 'Jesicca M A',
        },
        {
            id: 2,
            ratingCount: 5,
            feedback:
                'Just bought the handle and could adapt in a machine pated have not had the same measures of my door. Had only make 2 holes machine with a drill to make installation. Gave a little D and work, but the result was great.',
            author: 'Jesicca M A',
        },
        {
            id: 3,
            ratingCount: 5,
            feedback:
                'Just bought the handle and could adapt in a machine pated have not had the same measures of my door. Had only make 2 holes machine with a drill to make installation. Gave a little D and work, but the result was great.',
            author: 'Jesicca M A',
        },
    ];
    return (
        <Box
            className="common_margin"
            minHeight={'747px'}
            bgcolor={'#f8f1ed'}
            padding={'74px 0'}
        >
            <CommonContainer maxWidth="lg">
                <CommonHeadingBox heading={'From The People'} />
                <Grid container spacing={2} mt={5}>
                    {testimonialData?.length
                        ? testimonialData?.map((e) => {
                              return (
                                  <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      md={4}
                                      sx={flexCenterStyles}
                                  >
                                      <Box
                                          maxWidth={'388px'}
                                          minHeight={'358px'}
                                          bgcolor={'white'}
                                          padding={'30px'}
                                          display={'grid'}
                                          gap={'10px'}
                                      >
                                          <CustomRating
                                              count={e?.ratingCount}
                                              size="medium"
                                              color="#FF9000"
                                          />
                                          <Typography
                                              variant="body2"
                                              lineHeight={'30px'}
                                              color="#333333"
                                          >
                                              {e?.feedback}
                                          </Typography>
                                          <Typography
                                              variant="body1"
                                              fontWeight={500}
                                              lineHeight={'26.5px'}
                                          >
                                              _____ {e?.author}
                                          </Typography>
                                      </Box>
                                  </Grid>
                              );
                          })
                        : null}
                </Grid>
                <Box display={'flex'} justifyContent={'center'} mt={5}>
                    <CustomButton
                        text={'Show more reviews'}
                        height="53px"
                        width="213px"
                        textStyle="capitalize"
                        fontSize="18px"
                        fontWeight="400px"
                    />
                </Box>
            </CommonContainer>
        </Box>
    );
};

export default TestimonialSection;
