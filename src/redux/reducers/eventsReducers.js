import { EVENT_CREATED_FAILED, EVENT_CREATED_SUCCESS } from "../actions/types";

const initialState = {
	event: {},
	error: null,
	loading: false,
};

export function eventsReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case EVENT_CREATED_SUCCESS:
			return {
				...state,
				loading: false,
				event: payload,
				error: null,
			};
		case EVENT_CREATED_FAILED:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
}
