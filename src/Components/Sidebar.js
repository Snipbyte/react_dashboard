import React from "react";
import { FaHome, FaEnvelope, FaBars, FaCog, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-white md:w-[90px] w-full p-3 mb-2 md:flex md:items-center">
      <div className="rounded-xl p-4 bg-indigo-950">
        <ul className="flex flex-wrap">
          <li className="mx-2 md:mx-0 mb-4">
            <FaHome className="bg-transparent rounded-lg p-2 text-gray-400 text-4xl" />
          </li>
          <li className="mx-2 md:mx-0 mb-4">
            <FaEnvelope className="bg-indigo-500 rounded-lg p-2 text-white text-4xl" />
          </li>
          <li className="mx-2 md:mx-0 mb-4">
            <FaBars className="bg-transparent rounded-lg p-2 text-gray-400 text-4xl" />
          </li>
          <li className="mx-2 md:mx-0 mb-4">
            <FaCog className="bg-transparent rounded-lg p-2 text-gray-400 text-4xl" />
          </li>
          <li className="mx-2 md:mx-0 mb-4">
            <FaChartBar className="bg-transparent rounded-lg p-2 text-gray-400 text-4xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
