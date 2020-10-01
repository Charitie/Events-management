import {
	EDIT_EVENT_SUCCESS,
	EVENT_CREATED_FAILED,
	EVENT_CREATED_SUCCESS,
	MY_EVENTS_FETCHED,
	MY_EVENTS_FETCHED_FAILED,
} from "../actions/types";

const initialState = {
	event: {},
	events: {},
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
		case MY_EVENTS_FETCHED:
			return {
				...state,
				loading: false,
				events: payload,
				error: null,
			};
		case EDIT_EVENT_SUCCESS:
			return {
				...state,
				events: state.events.map((event) =>
					event.id === payload.id ? { ...event, event: payload.event } : event
				),
				loading: false
			};
		case EVENT_CREATED_FAILED:
		case MY_EVENTS_FETCHED_FAILED:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
}
