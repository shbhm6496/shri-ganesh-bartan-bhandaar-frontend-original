import backendApi from "../api/Backend";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/OrderConstants";

const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await backendApi.put(`/orders`, order, {
      headers: {
        Authorization: userInfo.token,
      },
    });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ORDER_CREATE_FAIL, payload: error });
  }
};

export default createOrder;
