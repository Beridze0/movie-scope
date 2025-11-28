import React from "react";

export default function Button({ children, type, onClick }) {
  if (type === "green")
    return (
      <button className="px-4 py-2 bg-teal-500 text-white rounded cursor-pointer hover:scale-105 transition-all">
        {children}
      </button>
    );
  if (type === "small")
    return (
      <button
        className="px-4 py-2 text-sm flex items-center bg-white/20 backdrop-blur text-white rounded cursor-pointer hover:scale-105  transition-all"
        onClick={onClick}
      >
        <span>{children}</span>
      </button>
    );
  if (type === "small-gr")
    return (
      <button className="px-4 py-2 text-sm bg-teal-500 text-white rounded cursor-pointer hover:scale-105 transition-all">
        {children}
      </button>
    );

  return (
    <button
      className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded cursor-pointer hover:scale-105 transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
