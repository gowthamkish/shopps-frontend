import React from "react";
import "../../scss/Products/products.scss";
import ProductListJSON from "../../data/ProductList.json";
import { Container, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {ProductListJSON &&
            ProductListJSON.length > 0 &&
            ProductListJSON.map((item, index) => {
              return (
                <Grid key={index} item md={4} xs={12}>
                  <ProductCard item={item} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;
