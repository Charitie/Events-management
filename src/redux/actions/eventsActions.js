import { axiosInstance } from "../../utils/axiosInstance";
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
		// console.log("my events res", response.data.events);
	} catch (error) {
		dispatch(fetchMyEventsFailed(error.response.data));
	}
};


//edit my event
export const editMyEventSuccess = ( event) => ({
	type: EDIT_EVENT_SUCCESS,
	payload: event,
});

export const editMyEventFailed = () => ({
	type: EDIT_EVENT_FAILED,
});

export const editMyEvent = (id, event) => async (dispatch) => {
	console.log("id:", id, "event:", event);
	try {
		const response = await axiosInstance.put(`/events/${id}`, event);
		console.log("res:", response.data.event);
		dispatch(editMyEventSuccess(response.data.event));
	} catch (error) {
		console.log(error)
		dispatch(editMyEventFailed(error.response));
	}
};

//delete my event 
export const eventDeleted = (id) => ({
	type: EVENT_DELETED,
	payload: id
});

export const deleteEvent = (id) => async (dispatch) => {
	console.log("id:", id);
	try {
		const response = await axiosInstance.delete(`/events/${id}`);
		console.log("res===:", response);
		dispatch(eventDeleted(response.data.event));
	} catch (error) {
		console.log(error)
	}
};
