import { combineReducers } from 'redux';
import {authReducer as auth} from './auth';
import { eventsReducer as events } from './eventsReducers';
import modal  from './modalReducer';

export default combineReducers({
  auth,
  events,
  modal
});
