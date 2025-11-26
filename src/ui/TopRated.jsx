import React from "react";
import { BiStar } from "react-icons/bi";
import temp from "../assets/temp.png";
import Button from "./Button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function ContinueWatching() {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold py-3">Top Rated</h1>
        <div className="flex items-center">
          <MdOutlineKeyboardArrowLeft className="size-6 cursor-pointer" />
          <MdOutlineKeyboardArrowRight className="size-6 cursor-pointer" />
        </div>
      </div>
      <div className="relative w-[210px] h-[180px]">
        <img src={temp} className="h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-white font-bold mb-2">The Chernobyl</h1>

          <div className="flex gap-3">
            <Button type="small">+</Button>
            <Button type="small-gr">Watch</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
