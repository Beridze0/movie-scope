import React from "react";
import { BiStar } from "react-icons/bi";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const {
    id,
    title,
    vote_average: _rating,
    poster_path: img,
    _genre_ids,
  } = movie;
  return (
    <Link to={`/movie/${id}`}>
      <div className="relative w-[280px] h-[240px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${img}`}
          className="h-full object-cover w-full rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-white font-bold ">{title}</h1>
          <div className="flex items-center mb-2">
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
          </div>
          <div className="flex gap-3">
            <Button type="small">+</Button>
            <Button type="small-gr">Watch</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
