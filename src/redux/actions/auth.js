import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from "./types";
import { axiosInstance } from "../../utils/axiosInstance";

export const userLoginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const userLoginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const userLoginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};

export const loginAsync = (user) => {
  return async (dispatch) => {
    dispatch(userLoginRequest());
    try {
      const response = await axiosInstance.post("/login", user);
      dispatch(userLoginSuccess(response.data));
    } catch (error) {
      dispatch(userLoginFailed(error.response.data));
    }
  };
};

export const userSignupRequest = () => {
  return { type: SIGNUP_REQUEST };
};

export const userSignupSuccess = (user) => {
  return { type: SIGNUP_SUCCESS, payload: user };
};

export const userSignupFailed = (error) => {
  return {
    type: SIGNUP_FAILED,
    payload: error,
  };
};

export const signupAsync = (user) => {
  return async (dispatch) => {
    dispatch(userSignupRequest());
    try {
      const response = await axiosInstance.post("/signup", user);
      dispatch(userSignupSuccess(response.data));
    } catch (error) {
      dispatch(userSignupFailed(error.response.data));
    }
  };
};
