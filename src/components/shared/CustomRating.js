import Rating from "@mui/material/Rating";

const CustomRating = ({ count, color = "#FF9000", size = "small" }) => {
  return (
    <Rating
      name="read-only"
      value={count}
      readOnly
      sx={{ color: color }}
      size={size}
    />
  );
};

export default CustomRating;
