import { GET_MOVIES } from "../actions/types";

const INITIAL_STATE = [];
export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload;

    default:
      return state;
  }
}