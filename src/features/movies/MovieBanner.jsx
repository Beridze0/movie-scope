import React from "react";
import temp from "../../assets/temp.png";
import Button from "../../ui/Button";

export default function MovieBanner({ movie }) {
  const {
    id,
    title,
    overview,
    vote_average: rating,
    poster_path: img,
    _genre_ids,
  } = movie;
  return (
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
  );
}
