
import { GET_MOVIES } from "./types";
import { getMovies } from "../../network/moviesAPI";
import { searchMovie } from "../../network/moviesAPI";

export const getMoviesList = (page,languageContext) => (dispatch) => {
  return getMovies(page,languageContext)
    .then((res) =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const getSearchMovies = (query,languageContext) => (dispatch) => {
  return searchMovie(query,languageContext)
    .then((res) =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};