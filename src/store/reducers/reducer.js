import { ADD_FAV } from "../actions/types";
import { REMOVE_FAV } from "../actions/types";

const INITIAL_STATE = [];

export default function favouritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_FAV:
      if (state.find((item) => item.id === action.payload.id)) return state;
      return [{...action.payload,favourite:true}].concat(state);
    case REMOVE_FAV:
      {
        return state.filter((item) => {
          return item.id !== action.payload;
        });
      }


    default:
      return state;
  }
}