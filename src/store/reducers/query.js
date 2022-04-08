import { ADD_QUERY } from "../actions/types";
const INITIAL_STATE = "";

export default function queryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_QUERY:
      return action.payload;

    default:
      return state;
  }
}