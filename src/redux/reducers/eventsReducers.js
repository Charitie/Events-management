import {
	EDIT_EVENT_FAILED,
	EDIT_EVENT_SUCCESS,
	EVENTS_FETCHED,
	EVENTS_FETCHED_FAILED,
	EVENT_CREATED_FAILED,
	EVENT_CREATED_SUCCESS,
	EVENT_DELETED,
	MY_EVENTS_FETCHED,
	MY_EVENTS_FETCHED_FAILED,
} from "../actions/types";

const initialState = {
	event: [],
	events: {},
	myEvents: {},
	error: null,
	loading: true,
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
		case EVENTS_FETCHED:
			return {
				...state,
				loading: false,
				events: payload,
				error: null,
			};
		case MY_EVENTS_FETCHED:
			return {
				...state,
				loading: false,
				myEvents: payload,
				error: null,
			};
		case EDIT_EVENT_SUCCESS:
			return {
				...state,
				myEvents: state.myEvents.map((event) =>
					event.id === payload.id ? { ...event, ...payload.event } : event
				),
				loading: false,
			};
		case EVENT_DELETED:
			return {
				...state,
				myEvents: state.myEvents.filter((event) => event.id !== payload),
				loading: false,
			};
		case EVENT_CREATED_FAILED:
		case EVENTS_FETCHED_FAILED:
		case MY_EVENTS_FETCHED_FAILED:
		case EDIT_EVENT_FAILED:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
}
