
import { axiosInstance } from "../../utils/axiosInstance";
import { EVENT_CREATED_FAILED, EVENT_CREATED_SUCCESS } from './types';

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
      
      console.log('res',response)
      dispatch(eventCreatedSuccess(response.data));
    } catch (error) {
      console.log('error', error)
      dispatch(eventCreatedFailed(error.response.data));
    }
  };
};

