import { combineReducers } from "redux";
import favouritesReducer from "./reducer";
import moviesReducer from "./movies";
import queryReducer from "./query";

export default combineReducers({
    favourites: favouritesReducer,
    movies: moviesReducer,
    query:queryReducer
  });
  