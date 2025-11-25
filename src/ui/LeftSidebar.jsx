import React from "react";
import Logo from "./Logo";
import {
  FiHome,
  FiSearch,
  FiAward,
  FiUsers,
  FiClock,
  FiStar,
  FiDownload,
  FiMusic,
  FiEye,
  FiCheckCircle,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const sidebarSections = [
  {
    title: "Menu",
    items: [
      { icon: <FiHome />, label: "Home", path: "/" },
      { icon: <FiSearch />, label: "Discover", path: "/discover" },
      { icon: <FiAward />, label: "Awards", path: "/awards" },
      { icon: <FiUsers />, label: "Celebrities", path: "/celebrities" },
    ],
  },
  {
    title: "Library",
    items: [
      { icon: <FiClock />, label: "Recent", path: "/recent" },
      { icon: <FiStar />, label: "Top Rated", path: "/top-rated" },
      { icon: <FiDownload />, label: "Downloaded", path: "/downloaded" },
      { icon: <FiMusic />, label: "Playlists", path: "/playlists" },
      { icon: <FiEye />, label: "Watchlist", path: "/watchlist" },
      { icon: <FiCheckCircle />, label: "Completed", path: "/completed" },
    ],
  },
  {
    title: "General",
    items: [
      { icon: <FiSettings />, label: "Settings", path: "/settings" },
      { icon: <FiLogOut />, label: "Log Out", path: "/logout" },
    ],
  },
];

export default function LeftSidebar() {
  return (
    <div className="h-full flex flex-1 flex-col w-52 bg-[#21242D] pl-5 py-2">
      <Logo />
      <div className="h-full flex flex-col justify-between w-full mt-6">
        {sidebarSections.map((section) => (
          <div key={section.title} className="w-full">
            <h3 className="text-gray-300 text-[0.93rem] mb-2">
              {section.title}
            </h3>
            <ul className="flex flex-col text-white">
              {section.items.map((item) => (
                <NavLink
                  to={item.path}
                  key={item.label}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5  py-[0.53rem] ${
                      isActive
                        ? "border-r-3 border-r-[#00B9AE] text-[#00B9AE]  "
                        : "text-white"
                    } hover:text-[#00B9AE]`
                  }
                >
                  {item.icon}
                  <span className="text-[0.92rem]">{item.label}</span>
                </NavLink>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
