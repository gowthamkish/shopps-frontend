import React from "react";
import ProductList from "../productList/ProductList";
import { Grid } from "@mui/material";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { Link } from "react-router-dom";

const Home = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <Grid container>
        {width > 600 && (
          <Grid className="left-panel" item md={2}>
            Filters
          </Grid>
        )}
        <Grid className="middle-container" item md={10} xs={12}>
          <div>
            <Link to="/admin">Admin</Link>
          </div>

          <ProductList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
