import React, { useEffect } from "react";
import ProductList from "../productList/ProductList";
import { Grid } from "@mui/material";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/thunk/fetchUsersThunk";
import GlobalLoader from "../common/GlobalLoader";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.users?.loading);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {isLoading && <GlobalLoader />}
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
