import React from "react";
import { Link } from "react-router-dom";
import { addToFavourites } from "../../store/actions/favourite";
import { deleteFromFavourites } from "../../store/actions/favourite";
import { useDispatch, useSelector } from "react-redux";

export default function MovieCard({ movie }) {
  const favourite = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const isFavourite = (movieId) => {
    if (!favourite) return;

    return favourite.find((movie) => movie.id === movieId);
  };
  const addToFavourite = () => {
    console.log("movie added success");
    dispatch(addToFavourites(movie));
  };

  const removeFromFavourite = (movieId) => {
    console.log("movieID", movieId);
    dispatch(deleteFromFavourites(movieId));
  };

  return (
    <div className=" h-100">
      <div>
      <div className="movieImg">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          className="card-img-top"
          alt={movie.title}
        />
        <div className="overlay-left">
          {!isFavourite(movie.id) ? (
            <i
              onClick={addToFavourite}
              className="fa-regular fa-heart large-icon"
              aria-hidden="true"
              style={{ color: "red" }}
            ></i>
          ) : (
            <i
              onClick={() => {
                removeFromFavourite(movie.id);
              }}
              className="fa-solid fa-heart large-icon"
              aria-hidden="true"
              style={{ color: "red" }}
            ></i>
          )}
        </div>

        <div className="overlay-right">
          <Link to={`/movies/${movie.id}`}>
            <i className="fa-solid fa-info large-icon success-icon"></i>
          </Link>
        </div>
      </div>
      </div>

      <div className="card-body text-center">
        <h5 className="card-title text-light">{movie.title} </h5>
      </div>
    </div>
  );
}
