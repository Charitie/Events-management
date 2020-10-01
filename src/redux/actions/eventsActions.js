import { axiosInstance } from "../../utils/axiosInstance";
import {
	EDIT_EVENT_FAILED,
	EDIT_EVENT_SUCCESS,
	EVENT_CREATED_FAILED,
	EVENT_CREATED_SUCCESS,
	MY_EVENTS_FETCHED,
	MY_EVENTS_FETCHED_FAILED,
} from "./types";

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

export const myEventsFetched = (events) => ({
	type: MY_EVENTS_FETCHED,
	payload: events,
});

export const fetchMyEventsFailed = () => ({
	type: MY_EVENTS_FETCHED_FAILED,
});

export const getMyEvents = () => async (dispatch) => {
	try {
		const response = await axiosInstance.get("/events");
		dispatch(myEventsFetched(response.data.events));
	} catch (error) {
		dispatch(fetchMyEventsFailed(error.respponse.data));
	}
};

export const editMyEventSuccess = (id, event) => ({
	type: EDIT_EVENT_SUCCESS,
	payload: {id, event}
});

export const editMyEvnentsFailed = () => ({
	type: EDIT_EVENT_FAILED,
});


export const editMyEvent = (id, event) => async (dispatch) => {
	console.log('id:',id, 'event:',event)
	try {
		const response = await axiosInstance.put(`/events/${id}`, event);
		console.log('res:', response)
		dispatch(editMyEventSuccess(response.data.event));
	} catch (error) {
		dispatch(editMyEvnentsFailed(error.response.data))
	}
};
