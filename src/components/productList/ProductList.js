import React from "react";
import "../../scss/Products/products.scss";
import ProductListJSON from "../../data/ProductList.json";

const ProductList = () => {
  return (
    <>
      {ProductListJSON &&
        ProductListJSON.length > 0 &&
        ProductListJSON.map((item) => {
          return (
            <>
              <div>{JSON.stringify(item.title)}</div>
              <img src={item?.image} />
            </>
          );
        })}
    </>
  );
};

export default ProductList;
