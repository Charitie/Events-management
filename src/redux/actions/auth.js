import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILED,
	LOGOUT,
	SET_AUTH_SUCCESS,
	SET_AUTH_FAILED,
} from "./types";
import { axiosInstance } from "../../utils/axiosInstance";

export const setAuthSuccess = () => {
	return { type: SET_AUTH_SUCCESS };
};

export const setAuthFailed = () => {
	return { type: SET_AUTH_FAILED };
};

export const setAuth = () => async (dispatch) => {
	try {
		dispatch(setAuthSuccess())
	} catch (error) {
		dispatch(setAuthFailed())
	}
}

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

			localStorage.setItem("fancyeventsJWT", response.data.token);
			dispatch(userLoginSuccess(response.data));
		} catch (error) {
			localStorage.removeItem("fancyeventsJWT");
			dispatch(userLoginFailed(error.response.data));
		}
	};
};

//Logout  /Clear Profile
export const userLoggedOut = () => ({
	type: LOGOUT,
});

export const logout = () => (dispatch) => {
	localStorage.removeItem("fancyeventsJWT");
	dispatch(userLoggedOut());
};

//register new user
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
