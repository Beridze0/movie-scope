import React from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../watchlist/watchlistSlice";

export default function MovieBanner({ movie }) {
  const dispatch = useDispatch();

  const { id, title, poster_path } = movie;

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
    <Link to={`movie/${id}`}>
      <div className="relative w-full h-80">
        {/* Background Image */}
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-white text-4xl font-bold mb-4">{title}</h1>
          <div className="flex gap-3">
            <Button onClick={handleClick}>+ Watchlist</Button>
            <Button type="green">Watch Now</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
