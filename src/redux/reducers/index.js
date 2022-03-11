import { combineReducers } from "redux";
import { productReducer, singleProductReducer } from "./productReducer";
const reducers = combineReducers({
  allproducts: productReducer,
  singleProduct: singleProductReducer,
});
export default reducers;
