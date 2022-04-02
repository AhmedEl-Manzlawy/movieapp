import { combineReducers } from "redux";
import favouritesReducer from "./reducer";

export default combineReducers({
    favourites: favouritesReducer
  });
  