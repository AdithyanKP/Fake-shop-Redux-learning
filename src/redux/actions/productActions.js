import { ActionTypes } from "../constants/actionTypes";
export const setProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: product,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
