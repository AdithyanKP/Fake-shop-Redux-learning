import { createStore } from "redux";
import reducers from "./reducers";

//store creation
const store = createStore(
  reducers,
  {},
  //chrome redux dev tool extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
