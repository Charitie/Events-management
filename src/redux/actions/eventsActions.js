import { axiosInstance } from "../../utils/axiosInstance";
import { closeModal } from "./modalAction";
import {
	CANCEL_RSVP_FAILED,
	CANCEL_RSVP_SUCCESS,
	EDIT_EVENT_FAILED,
	EDIT_EVENT_SUCCESS,
	EVENTS_FETCHED,
	EVENTS_FETCHED_FAILED,
	EVENT_CREATED_FAILED,
	EVENT_CREATED_SUCCESS,
	EVENT_DELETED_FAILED,
	EVENT_DELETED_SUCCESS,
	MY_EVENTS_FETCHED,
	MY_EVENTS_FETCHED_FAILED,
	RSVP_FAILED,
	RSVP_SUCCESS,
} from "./types";

//create an event
export const eventCreatedSuccess = (event) => {
	return { type: EVENT_CREATED_SUCCESS, payload: event };
};

export const eventCreatedFailed = (error) => {
	return {
		type: EVENT_CREATED_FAILED,
		payload: error,
	};
};

export const createEvent = (event) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post("/events", event);
			dispatch(eventCreatedSuccess(response.data));
		} catch (error) {
			dispatch(eventCreatedFailed(error.response.data));
		}
	};
};

//Fetch all events
export const eventsFetched = (events) => ({
	type: EVENTS_FETCHED,
	payload: events,
});

export const fetchEventsFailed = () => ({
	type: EVENTS_FETCHED_FAILED,
});

export const fetchEvents = () => async (dispatch) => {
	try {
		const response = await axiosInstance.get("/events");
		dispatch(eventsFetched(response.data.events));
	} catch (error) {
		dispatch(fetchEventsFailed(error.response.data));
	}
};

//fetch my events
export const myEventsFetched = (myEvents) => ({
	type: MY_EVENTS_FETCHED,
	payload: myEvents,
});

export const fetchMyEventsFailed = () => ({
	type: MY_EVENTS_FETCHED_FAILED,
});

export const fetchMyEvents = () => async (dispatch) => {
	try {
		const response = await axiosInstance.get("/my-events");
		dispatch(myEventsFetched(response.data.events));
	} catch (error) {
		dispatch(fetchMyEventsFailed(error.response.data));
	}
};

//edit my event
export const editMyEventSuccess = (event) => ({
	type: EDIT_EVENT_SUCCESS,
	payload: event,
});

export const editMyEventFailed = () => ({
	type: EDIT_EVENT_FAILED,
});

export const editMyEvent = (id, event) => async (dispatch) => {
	try {
		const response = await axiosInstance.put(`/events/${id}`, event);
		dispatch(editMyEventSuccess(response.data.event));
		dispatch(closeModal());
	} catch (error) {
		dispatch(editMyEventFailed(error.response.data));
	}
};

//delete my event
export const eventDeletedSuccess = (id) => ({
	type: EVENT_DELETED_SUCCESS,
	payload: id,
});

export const eventDeletedFailed = (error) => {
	return {
		type: EVENT_DELETED_FAILED,
		payload: error,
	};
};

export const deleteEvent = (id) => async (dispatch) => {
	try {
		await axiosInstance.delete(`/events/${id}`);

		dispatch(eventDeletedSuccess(id));
		dispatch(closeModal());
	} catch (error) {
		dispatch(eventDeletedFailed(error.response.data));
	}
};

//RSVP
export const rsvpSuccess = (event) => {
	return {
		type: RSVP_SUCCESS,
		payload: event,
	};
};

export const rsvpFailed = (error) => {
	return {
		type: RSVP_FAILED,
		payload: error,
	};
};

export const rsvp = (eventId, userId) => async (dispatch) => {
	try {
		const response = await axiosInstance.post(`/events/${eventId}/rsvp`);
		dispatch(rsvpSuccess({ eventId, userId }));
	} catch (error) {
		dispatch(rsvpFailed(error.response.data));
	}
};

export const cancelRsvpSuccess = (event) => {
	return {
		type: CANCEL_RSVP_SUCCESS,
		payload: event,
	};
};

export const cancelRsvpFailed = (error) => {
	return {
		type: CANCEL_RSVP_FAILED,
		payload: error,
	};
};

export const cancelRsvp = (eventId, userId) => async (dispatch) => {
	try {
		await axiosInstance.put(`/events/${eventId}/rsvps/cancel`);
		dispatch(cancelRsvpSuccess({ eventId, userId }));
	} catch (error) {
		dispatch(cancelRsvpFailed(error.response.data));
	}
};
