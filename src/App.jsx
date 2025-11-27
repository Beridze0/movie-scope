import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails, {
  loader as MovieDetailsLoader,
} from "./features/movies/MovieDetails";
import MoviesPage, {
  loader as MoviePageLoader,
} from "./features/movies/MoviesPage";
import Watchlist from "./features/watchlist/Watchlist";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import SearchedMovies, {
  loader as SearchedMoviesLoader,
} from "./features/movies/SearchedMovies";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        element: <MoviesPage />,
        index: true,
        loader: MoviePageLoader,
      },
      {
        element: <MovieDetails />,
        path: "movie/:movieId",
        loader: MovieDetailsLoader,
      },
      {
        element: <SearchedMovies />,
        path: "search",
        loader: SearchedMoviesLoader,
      },
      {
        element: <Watchlist />,
        path: "watchlist",
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
