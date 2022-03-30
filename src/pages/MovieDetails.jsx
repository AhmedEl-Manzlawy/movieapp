import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../components/network/MovieAPI";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  
  useEffect(() => {
    getMovieDetails(params.id)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>MovieDetails</h3>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
              className="img-fluid rounded-start"
              alt={movieDetails.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movieDetails.title}</h5>
              <p className="card-text">{movieDetails.vote_average} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
