import React from "react";
import { PiPerson } from "react-icons/pi";
import ContinueWatching from "./ContinueWatching";
import TopRated from "./TopRated";

export default function RightSidebar() {
  return (
    <div className="flex flex-col flex-2 p-2 text-white w-full h-full bg-[#21242D]">
      <div className="flex items-center gap-1 mb-5">
        <p>Davit</p>
        <PiPerson />
      </div>

      <ContinueWatching />
      <TopRated />
    </div>
  );
}
