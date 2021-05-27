import {
  SET_PRODUCTS,
  VIEW_PRODUCT,
  REMOVE_PRODUCT,
} from "../context/productContext";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const viewProduct = (product) => {
  return {
    type: VIEW_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = () => {
  return {
    type: REMOVE_PRODUCT,
  };
};
