import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from "../constants/UserConstants.js";

const UserLoginReducer = (state = { userInfo: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case USER_LOGOUT_SUCCESS:
      return { ...state, userInfo: null, loading: false };
    case USER_LOGOUT_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
const UserRegisterReducer = (state = { userInfo: null }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const UserDetailsReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const UserUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        success: true,
      };
    case USER_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export {
  UserLoginReducer,
  UserRegisterReducer,
  UserDetailsReducer,
  UserUpdateReducer,
};
