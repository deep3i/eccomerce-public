import React from "react";
import ProductDetails from "../features/product-list/compoents/ProductDetails";
import Navbar from "../features/navbar/navbar";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </div>
  );
};

export default ProductDetailPage;
