import { axiosInstance } from "./axiosConfig";

export const getMovieDetails = (id) => {
  return axiosInstance.get(`/movie/${id}`);
};

export const getMovies = () => {
  return axiosInstance.get(`/movie/popular`);
};

export const searchMovie = (query) => {
  return axiosInstance.get(`/search/movie/?query=${query}`);
};

