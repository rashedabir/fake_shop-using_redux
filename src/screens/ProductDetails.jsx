import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteProduct, viewProduct } from "../actions/productAction";

function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id && id !== "") {
      const productDeatils = async () => {
        const res = await axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .catch((err) => {
            console.log(err);
          });
        dispatch(viewProduct(res.data));
      };
      productDeatils();
      return () => {
        dispatch(deleteProduct());
      };
    }
  }, [id, dispatch]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="details">
          <img src={product.image} alt={product.title} />
          <div className="detail-box">
            <div className="row-title">
              <h2> {product.title} </h2>
              <h6> #id: {product.id} </h6>
            </div>
            <span> ৳ {product.price} </span>
            <br />
            <br></br>
            <p className="description"> {product.description} </p>
            <p className="sold"> sold : {product.sold} </p>
            <div className="row-btn">
              <Link id="buy-btn" to="/cart">
                buy now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
