import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-24 gap-24  py-2">
      <div className="flex items-center justify-between flex-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-2xl font-semibold pb-3 ${
              isActive ? "text-[#00B9AE] border-b-2  border-b-[#00B9AE]" : ""
            }`
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="tv"
          className={({ isActive }) =>
            `text-2xl font-semibold pb-3 ${
              isActive ? "text-[#00B9AE] border-b-2  border-b-[#00B9AE]" : ""
            }`
          }
        >
          TV Shows
        </NavLink>
        <NavLink
          to="anime"
          className={({ isActive }) =>
            `text-2xl font-semibold pb-3 ${
              isActive ? "text-[#00B9AE] border-b-2  border-b-[#00B9AE]" : ""
            }`
          }
        >
          Anime
        </NavLink>
      </div>

      <div className="flex items-center gap-3 rounded-lg  px-5  shadow py-2.5 bg-[#21242D] flex-1">
        <FaMagnifyingGlass />
        <input placeholder="Search movie" className="outline-none" />
      </div>
    </nav>
  );
}
