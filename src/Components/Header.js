import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <div>
        <div className="md:text-2xl text-xl font-bold">Dashboard</div>
        <div className="text-xs font-normal text-gray-500">
          Welcome to lorem Ipsum
        </div>
      </div>
      <div className="flex items-center relative">
        <input
          type="search"
          className="rounded-full w-full p-2 border border-gray-300 focus:outline-none"
          placeholder="Search"
        />
        <FiSearch className="absolute right-3 text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
