import React from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";
import RightSidebar from "./RightSidebar";

export default function AppLayout() {
  return (
    <div className="flex justify-between min-h-screen shrink-0">
      <div className="w-52">
        <LeftSidebar />
      </div>
      <div className="flex flex-col flex-1 text-white bg-[#16181E]">
        <Navbar />
        <Outlet />
      </div>
      <div className="w-80">
        <RightSidebar />
      </div>
    </div>
  );
}
