import backendApi from "../api/Backend";

import {
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
} from "../constants/UserConstants";

const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await backendApi.post(
      "/users/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

const userLogout = () => (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGOUT_FAIL, payload: error });
  }
};

const userRegister = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await backendApi.post(
      "/users/login",
      { name, email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_REGISTER_FAIL, payload: error });
  }
};

const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { userInfo } = localStorage.getItem("userInfo");
    console.log(userInfo);

    const { data } = await backendApi.get(`/users/${userInfo._id}`, {
      headers: {
        Authorization: userInfo.token,
      },
    });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_DETAILS_FAIL, payload: error });
  }
};

const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await backendApi.put(`/users/profile`, user, {
      headers: {
        Authorization: userInfo.token,
      },
    });

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_UPDATE_FAIL, payload: error });
  }
};

export {
  userLogin,
  userLogout,
  userRegister,
  getUserDetails,
  updateUserProfile,
};
