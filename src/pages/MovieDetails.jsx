import React from "react";
import { getMovieDetails } from "../components/network/MovieAPI"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    getMovieDetails(params.id)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(movieDetails);
  return (
    <div className="vh-100">
      <div className="card mx-5 my-5 ">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + movieDetails.backdrop_path}
              className="img-fluid rounded-start"
              alt={movieDetails.title}
            />
          </div>
          <div className="col-md-7 text-black">
            <div className="card-body">
              <h5 className="card-title">{movieDetails.title}</h5>
              <p className="card-text">{movieDetails.overview} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
