import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import useMui from '../../hooks/useMui';
import { flexCenterStyles } from '../styling';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';



const categoryData = [
  {
    id: 1,
    icon: LocalShippingOutlinedIcon,
    title: 'Free Delivery'
  },
  {
    id: 2,
    icon: LocalMallIcon,
    title: 'Non-contact shipping'
  },
  {
    id: 3,
    icon: WalletOutlinedIcon,
    title: 'Money back guarntee'
  },
  {
    id: 4,
    icon: ShieldOutlinedIcon,
    title: 'Secure payments'
  },
]
const CustomCategories = ({ border = false }) => {
  const { BLACK, SM } = useMui()
  const GREY_COLOR = 'rgba(0, 0, 0, 0.08)'

  return (
    <Box className="common_margin" minHeight={115} sx={flexCenterStyles} border={border ? `1px solid ${GREY_COLOR}` : ''}>
      <Container>
        <Grid container direction="row" spacing={1}>
          {
            categoryData?.map((category) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={3} mb={SM ? 0 : 4}>
                  <Stack direction={'row'} spacing={2} sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center'
                  }} >
                    <category.icon sx={{ color: BLACK }} />
                    <Typography variant="caption" display="block" gutterBottom >
                      {category.title}
                    </Typography>
                  </Stack>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box >
  )
}

export default CustomCategories