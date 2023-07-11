import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

const CardItem = (props) => {
  return (
    <div className="bg-gray-100 rounded-3xl p-5 mx-2 mb-2 md:w-4/12 w-full">
      <div className="flex items-center justify-between">
        <div className="mx-3 bg-gray-200 p-4 rounded-lg">
          <AiOutlineCamera className="text-white" size={24} />
        </div>
        <div className="mx-3">
          <div className="font-bold md:text-xl text-md">{props.title}</div>
          <div className="text-sm font-light text-gray-400 mb-2">
            {props.desc}
          </div>
          <div>
            <button className=" bg-indigo-500 text-white rounded-md p-2 text-center w-[120px]">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
