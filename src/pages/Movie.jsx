import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/navbar/MovieCard";
import {useSelector } from "react-redux";
import { LanguageContext } from "../context/language";
import { useDispatch } from "react-redux";
import { getMoviesList, getSearchMovies } from "../store/actions/movies"


export default function Movies() {
  // useSelector((state) => console.log("state from useSelector", state));
  // const location = useLocation();
  // const parsed = queryString.parse(location.search);
  // const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);

  const { languageContext, setLanguageContext } = useContext(LanguageContext);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const query = useSelector((state) => state.query);
  const [page, setPage] = useState(1);

  // useEffect(() => {
    // if (parsed["query"]) {
    //   console.log("there is query string");
    //   searchMovie(parsed["query"])
    //     .then((res) => {
    //       setMovies(res.data.results);
    //     })
    //     .catch((err) => console.log(err));
    // } else {
    //   console.log("there is no query string");
    //   console.log("page parsing", parsed["page"]);
    //   if (!parsed["page"]) {
    //     setPage(1);
    //     getMovies(1)
    //       .then((res) => {
    //         setMovies(res.data.results);
    //       })
    //       .catch((err) => console.log(err));
    //   } else {
    //     getMovies(page)
    //       .then((res) => {
    //         setMovies(res.data.results);
    //       })
    //       .catch((err) => console.log(err));
      // }
    // }
  // }, [location.search]);

  useEffect(() => {
    if (query === "") 
    {
      console.log("get movies");
      console.log("query=",query);
      dispatch(getMoviesList(page, languageContext));
      console.log(movies);
    }
    else dispatch(getSearchMovies(query, languageContext));

  }, [query, page, languageContext]);


  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    if (page > 1) setPage(page - 1);
    else setPage(1);
  }
  return (
    <div className="h-100">
      <div className="container d-flex justify-content-between mb-3">
        <button onClick={previousPage} type="button" className="btn btn-success">
          previous
        </button>
        <button onClick={nextPage} type="button" className="btn btn-success">
          next
        </button>
      </div>
      <div className="row  row-cols-1  row-cols-lg-6 row-cols-md-4 g-2">
        {movies.map((movie) => {
          return (
            <div className="col mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
