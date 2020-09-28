import { combineReducers } from 'redux';
import {authReducer as auth} from './auth';
import { eventsReducer as events } from './eventsReducers';

export default combineReducers({
  auth,
  events
});
