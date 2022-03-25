import axios from "axios";
import backendApi from "../api/Backend";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/ProductConstants";

const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await backendApi.get("/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
  }
};

const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await backendApi.get(`/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error });
  }
};

export { listProduct, listProductDetails };
