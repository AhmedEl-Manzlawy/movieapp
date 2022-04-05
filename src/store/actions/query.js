import { ADD_QUERY } from "./types";

export const addToQuery = (payload) => {
    return {
      type: ADD_QUERY,
      payload,
    };
  };
  