import { USER_LOGGEDIN } from "../actions/types";

export function userReducer(state={}, action){
  switch(action.type){
    case USER_LOGGEDIN:
      return action.user
    default:
      return state
  }
}
