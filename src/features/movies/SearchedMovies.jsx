import React from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import { BASE_URL, TMDB_OPTIONS } from "../../utils/api";

export default function SearchedMovies() {
  const movies = useLoaderData();

  if (!movies || movies.length === 0) {
    return <p className="text-center mt-10 text-gray-400">No movies found.</p>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
        Search Results
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?query=${query}`,
      TMDB_OPTIONS
    );

    if (!res.ok) throw new Error("Failed to fetch movies");

    const data = await res.json();
    return data.results;
  } catch (err) {
    throw new Error(err.message);
  }
}
