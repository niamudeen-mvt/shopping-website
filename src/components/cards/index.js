import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { bannerSubHeading } from "../styling";
import CustomRating from "../shared/CustomRating";
import useMui from "../../hooks/useMui";
import CustomButton from "../shared/CustomButton";

export const NewArrivalCard = ({ product, heading, showLabel }) => {
  const { BLACK } = useMui();
  return (
    <Card
      sx={{
        maxWidth: 285,
        height: "100%",
        ":hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box p={3} border={"1px solid #D9D9D9"}>
        {showLabel ? (
          <CustomButton
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
          color={heading === "New Arrivals" ? BLACK : ""}
        />
        <Typography gutterBottom component="p" sx={bannerSubHeading}>
          {product?.title}
        </Typography>
        <Stack direction="row" spacing={3}>
          <Typography
            component={"p"}
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "26.25px",
              textTransform: "uppercase",
            }}
          >
            ${product?.price}
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
            ${product?.price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
