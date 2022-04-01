export const addMovie = (payload) => {
    return {
      type: "ADD_MOVIE",
      payload,
    };
  };
export const deleteMovie = (payload) => {
    return {
      type: "DELETE_MOVIE",
      payload,
    };
  };