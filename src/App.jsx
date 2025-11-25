import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./features/movies/MovieDetails";
import MoviesPage from "./features/movies/MoviesPage";
import Watchlist from "./features/watchlist/Watchlist";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        element: <MoviesPage />,
        index: true,
      },
      {
        element: <MovieDetails />,
        path: "movie/:movieId",
      },
      {
        element: <Watchlist />,
        path: "watchlist",
      },
    ],
  },
  {
    element: <NotFound />,
    path: "*",
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
