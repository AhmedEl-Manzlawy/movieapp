import { ADD_FAV } from "./types";
import { REMOVE_FAV } from "./types";

export const addToFavourites = (payload) => {
  return {
    type: ADD_FAV,
    payload,
  };
};

export const deletefromFavourites = (payload) => {
  return {
    type: REMOVE_FAV,
    payload,
  };
};