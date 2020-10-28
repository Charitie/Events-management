import {
	EDIT_EVENT_FAILED,
	EDIT_EVENT_SUCCESS,
	EVENTS_FETCHED,
	EVENTS_FETCHED_FAILED,
	EVENT_CREATED_FAILED,
	EVENT_CREATED_SUCCESS,
	MY_EVENTS_FETCHED,
	MY_EVENTS_FETCHED_FAILED,
	RSVP_SUCCESS,
	CANCEL_RSVP_SUCCESS,
	CANCEL_RSVP_FAILED,
	RSVP_FAILED,
	EVENT_DELETED_FAILED,
	EVENT_DELETED_SUCCESS,
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
		case EVENT_DELETED_SUCCESS:
			return {
				...state,
				myEvents: state.myEvents.filter((event) => event.id !== payload),
				loading: false,
			};
		case RSVP_SUCCESS:
			return {
				...state,
				events: state.events.map((event) => {
					if (event.id === payload.eventId) {
						event.guests.push(payload.userId);
						return event;
					}
					return event;
				}),
				loading: false,
			};
		case CANCEL_RSVP_SUCCESS:
			return {
				...state,
				events: state.events.map((event) => {
					if (event.id === payload.eventId) {
						const index = event.guests.indexOf(payload.userId);
						event.guests.splice(index, 1);
						return event;
					}
					return event;
				}),
				loading: false,
			};
		case EVENT_CREATED_FAILED:
		case EVENTS_FETCHED_FAILED:
		case MY_EVENTS_FETCHED_FAILED:
		case EDIT_EVENT_FAILED:
		case EVENT_DELETED_FAILED:
		case CANCEL_RSVP_FAILED:
		case RSVP_FAILED:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
}
