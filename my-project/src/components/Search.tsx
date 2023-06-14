import React from "react";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon"

export const Search = () => {
  return (
    <div className="bg-yellow-400 hidden sm:flex items-center h-12 rounded-md flex-grow cursor-pointer  ">
      <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none outline-none"/>
      <SearchIcon className="h-6 w-10 p-1"/>
    </div>
  );
};
