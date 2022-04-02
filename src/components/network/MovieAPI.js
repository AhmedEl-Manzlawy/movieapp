import { axiosInstance } from "./axiosConfig";

export const getMovieDetails = (id) => {
  return axiosInstance.get(`/movie/${id}`);
};

export const getMovies = (page) => {
  return axiosInstance.get(`/movie/popular?page=${page}`);
};

export const searchMovie = (query) => {
  return axiosInstance.get(`/search/movie/?query=${query}`);
};

