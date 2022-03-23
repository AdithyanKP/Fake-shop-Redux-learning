import { ActionTypes } from "../constants/actionTypes";

//first loading listing product
export const setProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: product,
  };
};

//selecting a product
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

//removing the product from state
export const removeProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
