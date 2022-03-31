import React, { useEffect, useState } from "react";
import MovieCard from "../components/navbar/MovieCard"
import{getMovies , searchMovie} from "../components/network/MovieAPI"
import queryString from "query-string";

import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Movies() {
  const history = useHistory();
  const location = useLocation();
  console.log("HISTORY", history);
  console.log("LOCATION", location);
  const parsed = queryString.parse(location.search);
  console.log("QQQQ",parsed["query"]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (parsed["query"])
      searchMovie(parsed["query"])
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    else {
      getMovies()
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  console.log(movies);
  return (
    <div className="row row-cols-1 row-cols-md-6 g-2">
      {movies.map((movie) => {
        return (
          <div className="col mb-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
}
