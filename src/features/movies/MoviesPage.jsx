import React from "react";
import MovieCard from "./MovieCard";
import MovieBanner from "./MovieBanner";
import { useLoaderData } from "react-router-dom";
import { BASE_URL, TMDB_OPTIONS } from "../../utils/api";

export default function MoviesPage() {
  const data = useLoaderData();
  const movies = data.results;
  console.log();

  return (
    <div className="px-10 mt-6">
      <MovieBanner movie={movies[0]} />
      <div>
        <h1 className="text-xl mt-3 mb-2 font-semibold">
          Popular on MovieScope
        </h1>
        <div className="flex justify-between gap-4 pb-4">
          {movies.slice(1, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/popular?language=en-US&page=1`,
      TMDB_OPTIONS
    );
    if (!res.ok) throw new Error("Something went wrong with fetching movies");
    const data = await res.json();
    if (data.Response === "False") throw new Error("Movie not found");
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
