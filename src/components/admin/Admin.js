import { Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import CustomTextField from "../common/CustomTextField";

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");

  return (
    <div>
      <br />
      <Container>
        <h3>Add a Product</h3>

        <Grid container>
          <Grid item md={8}>
            <CustomTextField
              label="Product Name"
              variant="outlined"
              value={productName}
              handleChange={setProductName}
            />
          </Grid>
        </Grid>

        <br />
        <Grid container>
          <Grid item md={8}>
            <CustomTextField
              label="Product Title"
              variant="outlined"
              value={productTitle}
              handleChange={setProductTitle}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item md={8}>
            <CustomTextField
              label="Product Desc"
              variant="outlined"
              value={productDesc}
              handleChange={setProductDesc}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item md={8}>
            <CustomTextField
              label="Product Category"
              variant="outlined"
              value={productCategory}
              handleChange={setProductCategory}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item md={8}>
            <CustomTextField
              label="Product Price"
              variant="outlined"
              value={productPrice}
              handleChange={setProductPrice}
            />
          </Grid>
        </Grid>
        <br />
        <Button variant="contained">Add Product</Button>
      </Container>
    </div>
  );
};

export default Admin;
