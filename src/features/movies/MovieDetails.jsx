import React from "react";
import { BASE_URL, TMDB_OPTIONS } from "../../utils/api";
import { useLoaderData } from "react-router-dom";
import { BiStar } from "react-icons/bi";

const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const BACKDROP_BASE = "https://image.tmdb.org/t/p/original";

export default function MovieDetails() {
  const data = useLoaderData();
  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    genres,
    release_date,
    runtime,
    vote_average,
    vote_count,
    tagline,
    production_companies,
    status,
  } = data;

  return (
    <div className="w-full min-h-screen text-white bg-[#16181E]">
      {/* BACKDROP */}
      <div
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${BACKDROP_BASE}${backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-5 left-10 flex gap-6 items-end">
          <img
            src={`${IMAGE_BASE}${poster_path}`}
            alt={title}
            className="w-48 rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-2 max-w-xl">
            <h1 className="text-4xl font-bold">{title}</h1>
            {tagline && <p className="text-gray-300 italic">{tagline}</p>}
            <div className="flex items-center gap-2">
              <BiStar className="text-yellow-400" />
              <span>
                {vote_average.toFixed(1)} / 10 ({vote_count} votes)
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {release_date} • {runtime} min • {status}
            </p>
            {genres?.length > 0 && (
              <p className="text-sm text-gray-300">
                Genres: {genres.map((g) => g.name).join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* OVERVIEW & PRODUCTION */}
      <div className="px-10 py-8 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-gray-300 max-w-3xl">{overview}</p>

        {production_companies?.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mt-4">
              Production Companies
            </h2>
            <div className="flex flex-wrap gap-4 mt-2">
              {production_companies.map((c) => (
                <div
                  key={c.id}
                  className="flex flex-col items-center bg-[#21242D] p-2 rounded-lg shadow"
                >
                  {c.logo_path ? (
                    <img
                      src={`${IMAGE_BASE}${c.logo_path}`}
                      alt={c.name}
                      className="w-24 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-sm text-gray-300">{c.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const { movieId } = params;
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${movieId}?language=en-US`,
      TMDB_OPTIONS
    );
    if (!res.ok)
      throw new Error("Something went wrong this fetching movie details");

    const data = await res.json();
    if (data.Response === "False") throw new Error("Movie details not found");

    return data;
  } catch (err) {
    console.log(err);
  }
}
