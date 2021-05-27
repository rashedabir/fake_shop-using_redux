import {
  REMOVE_PRODUCT,
  SET_PRODUCTS,
  VIEW_PRODUCT,
} from "../context/productContext";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const viewProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case VIEW_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};
