import "./scss/common/index.scss";
import ProductList from "./components/productList/ProductList";
import Header from "./components/common/Header";
import { Grid } from "@mui/material";
import { inject } from "@vercel/analytics";
import useWindowDimensions from "./components/customHooks/useWindowDimensions";

function App() {
  inject();

  const { height, width } = useWindowDimensions();

  return (
    <div className="wrapper">
      <Header />

      <Grid container>
        {width > 600 && (
          <Grid className="left-panel" item md={2} xs={0}>
            Filters
          </Grid>
        )}
        <Grid className="middle-container" item md={10} xs={12}>
          <ProductList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
