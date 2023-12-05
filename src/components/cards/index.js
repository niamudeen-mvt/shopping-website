import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  CardMedia,
} from "@mui/material";
import { defaultBorder } from "../styling";
import CustomRating from "../shared/CustomRating";
import CustomLabel from "../shared/CustomLabel";
import ProductPrice from "../shared/Product/ProductPrice";

export const NewArrivalCard = ({ product, heading, showLabel }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        maxWidth: 285,
        height: "100%",
        ":hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box p={3} sx={defaultBorder}>
        {showLabel ? (
          <CustomLabel
            text={"sale"}
            width="65px"
            height="20px"
            borderRadius={"10px"}
            bgColor={"#4B9AD5"}
            fontSize={"12px"}
            fontWeight={"500px"}
            lineHeight="14px"
            letterSpacing="2.1px"
          />
        ) : null}
        <CardMedia
          component="img"
          image={product?.image}
          alt="product-image"
          sx={{ minHeight: "370px", objectFit: "contain" }}
        />
      </Box>
      <CardContent>
        <CustomRating
          count={product?.rating?.rate}
          color={heading === "New Arrivals" ? "BLACK" : "DEFAULT"}
        />
        <Typography gutterBottom variant="body2" fontWeight={500} lineHeight={'26.5px'}>
          {product?.title}
        </Typography>
        <Stack direction="row" spacing={3}>
          <ProductPrice />
        </Stack>
      </CardContent>
    </Card >
  );
};
