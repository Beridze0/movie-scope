import React from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

export default function MovieBanner({ movie }) {
  const {
    id,
    title,
    vote_average: _rating,
    poster_path: img,
    _genre_ids,
  } = movie;
  return (
    <Link to={`movie/${id}`}>
      <div className="relative w-full h-[320px]">
        {/* Background Image */}
        <img
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-white text-4xl font-bold mb-4">{title}</h1>
          <div className="flex gap-3">
            <Button>+ Watchlist</Button>
            <Button type="green">Watch Now</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
