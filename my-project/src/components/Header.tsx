import React from "react";
import Image from "next/image";
import { Search } from "./Search";
export const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 space-x-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/* IMAGE */}
          <Image
            src="https://links.papareact.com/f90"
            alt="header-image"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
            className="cursor-pointer"
          />
        </div>
        <Search />
        {/* RIGHT SIDE */}
        <div className="text-white flex items-center text-xs space-x-6 px-4 whitespace-nowrap">
          <div className="cursor-pointer link">
            <p>Hello Indor</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="cursor-pointer link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="cursor-pointer link flex items-center md:gap-2 w-8 md:w-full relative">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full text-black bg-yellow-400">
              4
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-10 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
        {/* Bottom navigation */}
        
      </div>
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 lg:space-x-6 p-2 pl-6">
          <p className="link flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's Deals</p>
          <p className="link hidden lg:inline-flex">Elektronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>
    </header>
  );
};
