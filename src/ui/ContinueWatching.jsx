import React from "react";
import temp from "../assets/temp.png";
import Button from "./Button";
import { GrInProgress } from "react-icons/gr";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function ContinueWatching() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold py-3">Continue</h1>
        <div className="flex items-center ">
          <MdOutlineKeyboardArrowLeft className="size-6 cursor-pointer" />
          <MdOutlineKeyboardArrowRight className="size-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col border border-gray-600 w-[210px] bg-[#16181E] rounded-lg p-2">
        <div className="flex gap-1">
          <img src={temp} className="w-20 h-[70px] rounded-md" />
          <div className="flex flex-col">
            <p className="text-[0.79rem] font-semibold">Wanda Vision</p>
            <p className="text-xs mb-3">Continue...</p>
            <GrInProgress />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Button type="small">Drop</Button>
          <button className="flex-1 py-2 text-sm bg-teal-500 text-white rounded cursor-pointer hover:scale-105 transition-all">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}
