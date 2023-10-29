import "./scss/common/index.scss";
import ProductList from "./components/productList/ProductList";
import Header from "./components/common/Header";
import { Grid } from "@mui/material";
import { inject } from "@vercel/analytics";

function App() {
  inject();

  return (
    <div className="wrapper">
      <Header />

      <Grid container>
        <Grid className="left-panel" item md={2}>
          Filters
        </Grid>
        <Grid className="middle-container" item md={10}>
          <ProductList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
