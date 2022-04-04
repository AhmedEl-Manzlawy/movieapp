import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log("INTERCEPTOR", config);
    config.headers["Content-Type"] = "application/json;charset=utf-8";
    config.headers["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTU5NDAzN2MyMjkxMGYxMjg1NTU1MjcwMmM1MjFmOCIsInN1YiI6IjVmNWVmMDc4ZDhjYzRhMDAzOWYxOGI5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QhHc19PNx19fIYwJWNTYQMYkRXVdO1_vDJrTRuKfjvQ";

    // console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
