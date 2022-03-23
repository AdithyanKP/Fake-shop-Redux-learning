import { combineReducers } from "redux";
import { productReducer, singleProductReducer } from "./productReducer";

//combining reducers
const reducers = combineReducers({
  allproducts: productReducer,
  product: singleProductReducer,
});
export default reducers;
