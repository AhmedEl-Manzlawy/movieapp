import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({movie}) {
  return (
    <div className="card">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.original_title}/>
    <div className="card-body">
      <h5 className="card-title">{movie.original_title}</h5>
      <p className="card-text">{movie.overview}</p>
    </div>
    <div className="card-footer">
    <Link to="/movie" className="btn btn-primary">Details</Link>
    </div>
  </div>
  )
}
