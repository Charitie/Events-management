import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
        isAuthenticated: true,
      };
    case LOGIN_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
