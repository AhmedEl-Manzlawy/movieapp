import React from "react";
import { getMovieDetails } from "../components/network/MovieAPI";
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
    <div className="card my-3 container col-8 w-50 ">
      <img
        className="card-img-top"
        src={"https://image.tmdb.org/t/p/w500/" + movieDetails.backdrop_path}
        alt={movieDetails.title}
      />
      <div className="card-body bg-dark text-light">
        <h5 className="card-title ">{movieDetails.title}</h5>
        <p className="card-text">{movieDetails.overview}</p>
        <p className="card-text">
          <small>
            <strong>Rating: </strong>
            {movieDetails.vote_average}
          </small>
        </p>
      </div>
    </div>
  );
}
