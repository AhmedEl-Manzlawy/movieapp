import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/navbar/MovieCard";

export default function Movie() {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4bc8ab92629a7e88ac0b5bb52bcf2173"
      )
      .then((res) => setMovies(res.data))
      // .then((res)=>console.log(res))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h3>Hello From Movie</h3>
      {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        {Movies.map((movie) => {
          return (
            <div className="col mb-4" key={movie.data}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div> */}
    </>
  );
}
