import React from "react";

export const Search = () => {
  return (
    <div className="bg-yellow-400 hidden sm:flex items-center h-12 rounded-md flex-grow cursor-pointer  ">
      <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none outline-none"></input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-12 w-14 p-4 text-white hover:bg-yellow-500 transition-all duration-200 ease-in-out cursor-pointer rounded-md"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};
