import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "./types";
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
      console.log(response.data)
    } catch (error) {
      dispatch(userLoginFailed(error));
    }
  };
};
