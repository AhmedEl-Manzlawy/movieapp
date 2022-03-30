import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}popular?api_key=d1f06f746c82eac24bc1f93a2ca831e0`
      )
      .then((res) => {
        setMovieDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <div lg={4} md={4}>
          <img
            style={{ height: "300px" }}
            alt=""
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          ></img>
        </div>
        <div>
          <h1 style={{ fontStyle: "italic", fontWeight: "bolder" }}>
            {movieDetails.title}
          </h1>
          <h3 style={{ fontStyle: "italic", color: "#999" }}>
            {movieDetails.overview}
          </h3>
        </div>
      </div>
      <div>
        <div>
          <h2>
            Home Page :{" "}
            <span>
              <a href={movieDetails.homepage}>Click Here</a>
            </span>
          </h2>
          <h2>
            Language : <span>{movieDetails.original_language}</span>
          </h2>
          <h2>
            Release : <span>{movieDetails.release_date}</span>
          </h2>
          <h2>
            Status : <span>{movieDetails.status}</span>
          </h2>
          <h2>
            Rating : <span>{movieDetails.vote_average}</span>
          </h2>

          <h2>
            Voters : <span>{movieDetails.vote_count}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Details;
