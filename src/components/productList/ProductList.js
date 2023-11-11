import React from "react";
import "../../scss/Products/products.scss";
import { Container, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
const ProductList = () => {
  const users = useSelector((state) => state?.users?.users);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {users &&
            users.length > 0 &&
            users.map((item, index) => {
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
