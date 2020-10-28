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
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("fancyeventsJWT"),
	isAuthenticated: false,
	user: JSON.parse(localStorage.getItem("fancyeventsUser")),
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
			localStorage.setItem(
				"fancyeventsUser",
				JSON.stringify({
					id: action.payload.id,
				})
			);
			return {
				...state,
				loading: false,
				user: { id: action.payload.id },
				token: action.payload.token,
				error: null,
				isAuthenticated: true,
			};
		case SET_AUTH_SUCCESS:
			return { ...state, isAuthenticated: true };
		case LOGIN_FAILED:
		case LOGOUT:
		case SIGNUP_FAILED:
		case SET_AUTH_FAILED:
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				error: action.payload,
				token: null,
			};
		default:
			return state;
	}
}
