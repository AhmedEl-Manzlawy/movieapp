import React  from "react";
import { Link } from "react-router-dom";

import { addToFavourites } from "../../store/actions/favourite";
import { deletefromFavourites } from "../../store/actions/favourite";
import { useDispatch, useSelector } from "react-redux";

export default function MovieCard({ movie }) {
  const favouraite = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const isFavourite = (movieId) => {
    if (!favouraite) return;

    return favouraite.find((movie) => movie.id === movieId);
  };

  const addToFav = () => {
    dispatch(addToFavourites(movie));
  };

  const removeFromFav = (movieId) => {
    dispatch(deletefromFavourites(movieId));
  };
  
  return (
    <div className=" h-100">
      <div className="card">
        <div className=" movieImg">

          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            className="card-img-top"
            alt={movie.title}
          />

          <div className="overlay-left">
            {!isFavourite(movie.id) ? (
              <i
                onClick={addToFav}
                class="fa-regular fa-heart large-icon"
                aria-hidden="true"
                style={{ color: "red" , fontSize:"bold" }}
              ></i>
            ) : (
              <i
                onClick={() => {
                  removeFromFav(movie.id);
                }}
                class="fa-solid fa-heart large-icon"
                aria-hidden="true"
                style={{ color: "red" }}
              ></i>
            )}
          </div>

          
        </div>
        <div class="card-footer bg-black">
      <small class="text-dark">
            <Link to={`/movies/${movie.id}`} className="btn btn-info w-100  m-0">
              Info
            </Link>
          </small>
    </div>
      </div>

      <div className="card-body text-center">
        <h5 className="card-title">{movie.title} </h5>
      </div>
      
    </div>
  );
}
