import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className=" h-100">
      <div className="">
        <Link to={`/details/${movie.id}`} >
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            className="card-img-top"
            alt={movie.title}
          />
        </Link>
      </div>

      <div className="card-body text-center">
        <h5 className="card-title text-light">{movie.title} </h5>
      </div>
    </div>
  );
}
