import React from "react";
import temp from "../../assets/temp.png";
import { BiStar } from "react-icons/bi";
import Button from "../../ui/Button";

export default function MovieCard() {
  return (
    <div>
      <div className="relative w-[280px] h-[220px]">
        <img src={temp} className="h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-white font-bold ">The Chernobyl</h1>
          <div className="flex items-center mb-2">
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
          </div>
          <div className="flex gap-3">
            <Button type="small">+</Button>
            <Button type="small-gr">Watch</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
