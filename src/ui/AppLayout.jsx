import React from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";
import RightSidebar from "./RightSidebar";

export default function AppLayout() {
  return (
    <div className="flex justify-between h-screen">
      <LeftSidebar />
      <div className="flex flex-col flex-4 text-white bg-[#16181E]">
        <Navbar />
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
}
