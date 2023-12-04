import Rating from "@mui/material/Rating";

const CustomRating = ({ count, color }) => {
  return (
    <Rating
      name="read-only"
      value={count}
      readOnly
      sx={{ color: color }}
      size="small"
    />
  );
};

export default CustomRating;
