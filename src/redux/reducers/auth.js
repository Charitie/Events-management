import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILED,
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: false,
	user: null,
	error: null,
	loading: false,
};

export function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
		case SIGNUP_REQUEST:
			return { ...state, loading: true };
		case LOGIN_SUCCESS:
		case SIGNUP_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				loading: false,
				user: action.payload,
				error: null,
				isAuthenticated: true,
			};
		case LOGIN_FAILED:
		case SIGNUP_FAILED:
			localStorage.removeItem("token");
			return { ...state, token: null, loading: false, error: action.payload };
		default:
			return state;
	}
}
