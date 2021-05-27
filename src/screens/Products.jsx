import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/productAction";
import Product from "../components/Product";

function Products() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log(err);
        });
      dispatch(setProducts(res.data));
    };
    getProducts();
  }, [dispatch]);

  return (
    <div className="products">
      {Object.keys(products).length === 0 ? (
        <div>Loading</div>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default Products;
