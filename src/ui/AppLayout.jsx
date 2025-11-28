import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";
import RightSidebar from "./RightSidebar";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();

  return (
    <div className="flex min-h-screen bg-[#16181E] text-white">
      <div className="w-52 shrink-0 h-screen">
        <LeftSidebar />
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="shrink-0">
          <Navbar />
        </div>

        <div className="flex-1 overflow-y-auto">
          {navigation.state === "loading" ? <Loader /> : <Outlet />}
        </div>
      </div>

      <div className="w-80 shrink-0 h-screen hidden lg:flex">
        <RightSidebar />
      </div>
    </div>
  );
}
