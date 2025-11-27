import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-24 gap-24 mt-3 py-2">
      <div className="flex items-center justify-between flex-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-xl hover:text-[#00B9AE] hover:border-b-2 hover:border-b-[#00B9AE] font-semibold pb-3 ${
              isActive ? "text-[#00B9AE] border-b-2  border-b-[#00B9AE]" : ""
            }`
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="tv"
          className={({ isActive }) =>
            `text-xl hover:text-[#00B9AE] hover:border-b-2 hover:border-b-[#00B9AE] font-semibold pb-3 ${
              isActive ? "text-[#00B9AE] border-b-2  border-b-[#00B9AE]" : ""
            }`
          }
        >
          TV Shows
        </NavLink>
        <NavLink
          to="anime"
          className={({ isActive }) =>
            `text-xl hover:text-[#00B9AE] hover:border-b-2 hover:border-b-[#00B9AE] font-semibold pb-3 ${
              isActive ? "text-[#00B9AE] border-b-2  border-b-[#00B9AE]" : ""
            }`
          }
        >
          Anime
        </NavLink>
      </div>
      <Search />
    </nav>
  );
}
