import { combineReducers } from "redux";
import { productReducer, singleProductReducer } from "./productReducer";
const reducers = combineReducers({
  allproducts: productReducer,
  product: singleProductReducer,
});
export default reducers;
