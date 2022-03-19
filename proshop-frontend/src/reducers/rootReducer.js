import { combineReducers } from "redux";

import {
  productDetailsReducer,
  productListReducer,
} from "../reducers/ProductReducers.js";

const rootReducer = combineReducers({
  listProduct: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = { listProduct: { products: null } };
export { rootReducer, initialState };
