import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const GlobalLoader = () => {
  return (
    <Box className="global-loader" sx={{ display: "flex" }}>
      <CircularProgress size={100} />
    </Box>
  );
};

export default GlobalLoader;
