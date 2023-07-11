import React from "react";
import { FaChartLine } from "react-icons/fa";
import VerticalGraphItem from "./VerticalGraphItem";

const VerticalGraph = () => {
  return (
    <>
      <div className="text-gray-400 font-normal mb-5 mx-2">Category Name</div>
      <div className="flex items-center">
        <div className="mx-2 w-1/2">
          <div className="text-xs text-gray-400 mb-1">Lorem</div>
          <div className="md:text-3xl text-xl font-bold mb-4">579$</div>
          <div className="flex items-center">
            {" "}
            <div className="p-2 bg-green-500 rounded-full">
              <FaChartLine className="text-green-200" />{" "}
            </div>
            <div className="text-gray-400 mx-1 text-base font-light"> 136</div>
          </div>
        </div>
        <div className="flex mx-2 w-1/2">
          <VerticalGraphItem title="XS" color="bg-blue-200" height="35" />
          <VerticalGraphItem title="S" color="bg-blue-200" height="55" />

          <VerticalGraphItem title="M" color="bg-indigo-500" height="70" />
          <VerticalGraphItem title="L" color="bg-blue-200" height="58" />
          <VerticalGraphItem title="XL" color="bg-blue-200" height="78" />
        </div>
      </div>
    </>
  );
};

export default VerticalGraph;
