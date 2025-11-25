import React from "react";
import MovieCard from "./MovieCard";
import MovieBanner from "./MovieBanner";

export default function MoviesPage() {
  return (
    <div className="px-10 mt-6">
      <MovieBanner />
      <div>
        <h1 className="text-xl mt-3 mb-2 font-semibold">
          Popular on MovieScope
        </h1>
        <div className="flex flex-wrap justify-between">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
