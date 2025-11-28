import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movies/MovieCard";

export default function Watchlist() {
  const movies = useSelector((state) => state.watchlist.items);
  console.log(movies);

  if (movies.length === 0) return <p>Please add movies to watchlist first</p>;

  return (
    <div className="border">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
