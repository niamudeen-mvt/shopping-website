import { Box, Button, Container, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const TestimonialSection = () => {

  const testimonialData = [
    {
      id: 1,
      ratingCount: 5,
      feedback: 'Just bought the handle and could adapt in a machine pated have not had the same measures of my door. Had only make 2 holes machine with a drill to make installation. Gave a little D and work, but the result was great.',
      author: 'Jesicca M A'
    },
    {
      id: 2,
      ratingCount: 5,
      feedback: 'Just bought the handle and could adapt in a machine pated have not had the same measures of my door. Had only make 2 holes machine with a drill to make installation. Gave a little D and work, but the result was great.',
      author: 'Jesicca M A'
    },
    {
      id: 3,
      ratingCount: 5,
      feedback: 'Just bought the handle and could adapt in a machine pated have not had the same measures of my door. Had only make 2 holes machine with a drill to make installation. Gave a little D and work, but the result was great.',
      author: 'Jesicca M A'
    }
  ]
  return (
    <Box className="common_section_margin testimonial_section">
      <Container className=' flex_center'>
        <div className='text_center '>
          <Typography className='common_section_heading text_center'>From The People</Typography>
          <Typography variant='body1' className='text_center'>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</Typography>
        </div>
        <Grid container spacing={2} mt={5} >
          {
            testimonialData?.length ?
              testimonialData?.map(e => {
                return (
                  <Grid item xs={12} md={4} >
                    <Box className='testmonial_card'>
                      <Rating name="read-only" value={e?.ratingCount} readOnly size="small" className="product_rating" />
                      <Typography className='feeback'>{e?.feedback}</Typography>
                      <Typography variant='body2'>_____ {e?.author}</Typography>
                    </Box>
                  </Grid>
                )
              }) : null
          }
        </Grid>
        <Box className=" text_center" mt={5}>
          <Button variant='contained' className='theme_btn text_center' >Show more reviews</Button>
        </Box>
      </Container>
    </Box >
  )
}

export default TestimonialSection