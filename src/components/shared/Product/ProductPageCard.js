import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  CardMedia,
} from "@mui/material";
import { defaultBorder } from "../../styling";
import CustomRating from "../../shared/CustomRating";

const ProductPageCard = ({ product }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        maxWidth: 285,
        height: "100%",
        ":hover": {
          backgroundColor: "transparent",
        },
        ...defaultBorder
      }}
    >
      <Box sx={defaultBorder}>
        <CardMedia
          component="img"
          image={product?.image}
          alt="product-image"
          sx={{ height: "100%", objectFit: "contain" }}
        />
      </Box>
      <CardContent>
        <Stack direction={'column'} spacing={2}>
          <Typography variant="body1" fontSize={'16px'} fontWeight={'500'}>
            {product.customer}
          </Typography>
          <Typography variant="body1" fontSize={'16px'} fontWeight={'500'} color="#8D8D8D">
            {product.date}
          </Typography>
          <CustomRating
            count={product?.rating}
            color={"#FF9000"}
          />
          <Typography variant="body1" fontSize={'14px'} fontWeight={'500'} color={'#1A1C20'}>
            {product?.description}
          </Typography>
        </Stack>
      </CardContent>
    </Card >
  );
};

export default ProductPageCard
