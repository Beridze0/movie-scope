import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { addMovie } from "../watchlist/watchlistSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const { id, title, vote_average: _rating, poster_path } = movie;

  function handleClick(e) {
    e.preventDefault();
    const movie = {
      id,
      title,
      poster_path,
    };
    dispatch(addMovie(movie));
  }

  return (
    <Link to={`/movie/${id}`}>
      <div className="relative w-[280px] h-[240px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="h-full object-cover w-full rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-white font-bold mb-1.5">{title}</h1>
          <div className="flex gap-3">
            <Button type="small" onClick={handleClick}>
              +
            </Button>
            <Button type="small-gr">Watch</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
