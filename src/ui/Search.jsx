import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    navigate(`search?query=${query}`);
    setQuery("");
  }

  return (
    <form
      className="flex items-center gap-3 rounded-lg  px-5 mb-2 shadow py-2.5 bg-[#21242D] flex-1"
      onSubmit={handleSubmit}
    >
      <FaMagnifyingGlass />
      <input
        placeholder="Search movie"
        className="outline-none"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}
