import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const QuantityIncrementer = () => {
  const [quantity, setQuantity] = useState(1); // State to hold the quantity

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    // You can set a maximum limit if needed
    setQuantity(quantity + 1);
  };

  return (
    <Box
      sx={{
        width: "250px",
        height: "36px",
        border: "1px solid #D9D9D9",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <Button
        variant="text"
        sx={{
          flex: "1", // Added flex properties to fit within the box
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
        onClick={decreaseQuantity}
      >
        -
      </Button>
      <Button
        variant="text"
        sx={{
          flex: "1", // Added flex properties to fit within the box
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        {quantity}
      </Button>
      <Button
        variant="text"
        sx={{
          flex: "1", // Added flex properties to fit within the box
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
        onClick={increaseQuantity}
      >
        +
      </Button>
    </Box>
  );
};

export default QuantityIncrementer;
