import { Card, CardContent, Box, Typography, Rating, Stack, Badge } from "@mui/material";






export const NewArrivalCard = ({ product }) => {
  console.log(product, "product");
  return (
    <Card className="product_card ">
      <Box className="top_content flex_center" mb={2}>
        <CardContent className="">
          <img src={product?.image} alt="product-image" />
        </CardContent>
      </Box>
      <Box>
        <Stack spacing={1}>
          <Rating name="read-only" value={product?.rating?.rate} readOnly size="small" className="product_rating" />
          <Typography variant="subititle1" className="product_tilte">
            {product?.title}
          </Typography>
          <Stack direction='row' spacing={3}>
            <Typography variant="body1" className="product_price">
              ${product?.price}
            </Typography>
            <Typography variant="body1" className="product_defult_price">
              ${product?.price}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card >
  )
}