import { Typography } from '@mui/material'
import React from 'react'

const ProductPrice = ({ price = "54.58" }) => {
  return (
    <>
      <Typography
        component={"p"}
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "26.25px",
          textTransform: "uppercase",
        }}
      >
        ${price}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "26.25px",
          textTransform: "uppercase",
          color: "#D9D9D9",
        }}
      >
        <del>${price}</del>
      </Typography>
    </>
  )
}

export default ProductPrice