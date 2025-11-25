import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FavoritesPage from "./features/movies/FavoritesPage";
import MovieDetails from "./features/movies/MovieDetails";
import MoviesPage from "./features/movies/MoviesPage";
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
        element: <FavoritesPage />,
        path: "favorites",
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
