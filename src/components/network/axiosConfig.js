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
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzUxZjEyZGIzNDMxZWIzOTI4YjExMjMxMGFlOTM2NCIsInN1YiI6IjYyNDU2YzE5YmU1NWI3MDA1ZDhjZTViMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oP7PRvd_x0gAF5Wlh24nb7qvrY6AXIJ3xe_UIq80SBY";

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
