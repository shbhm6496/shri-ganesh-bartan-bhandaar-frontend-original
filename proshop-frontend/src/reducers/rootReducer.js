import { combineReducers } from "redux";

import {
  productDetailsReducer,
  productListReducer,
} from "../reducers/ProductReducers.js";
import CartReducer from "./CartReducers.js";
import CreateOrderReducers from "./OrderReducer.js";
import {
  UserLoginReducer,
  UserRegisterReducer,
  UserDetailsReducer,
  UserUpdateReducer,
} from "./UserReducers.js";

const rootReducer = combineReducers({
  listProducts: productListReducer,
  productDetails: productDetailsReducer,
  cart: CartReducer,
  userLogin: UserLoginReducer,
  userRegister: UserRegisterReducer,
  userDetails: UserDetailsReducer,
  userUpdate: UserUpdateReducer,
  createOrder: CreateOrderReducers,
});

const initialState = {
  listProducts: { products: null },
  productDetails: { product: null },
  cart: {
    cartItems: JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
  },
  userLogin: {
    userInfo: JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {},
  },
};
export { rootReducer, initialState };
