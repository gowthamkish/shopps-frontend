import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = (props) => {
  const handleInputChange = (event) => {
    props.handleChange(event.target.value);
  };
  return (
    <div>
      <TextField
        fullWidth
        id="outlined-basic"
        label={props.label}
        variant={props.variant}
        value={props.value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CustomTextField;
