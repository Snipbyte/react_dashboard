import React from "react";

const HorizontalGraphItem = (props) => {
  return (
    <div className="mx-2 w-full">
      <div className="flex mb-1 items-center">
        <div
          className={`mx-1 ${props.iconColor} p-2 rounded-lg ${props.textColor}`}
        >
          {props.icon}
        </div>
        <div class=" mx-1 text-base  text-gray-400">{props.title}</div>
      </div>
      <div class="mb-1  mx-1 font-bold text-3xl">{props.value}</div>
      <div className="bg-gray-200 rounded-full h-1.5 mb-4 ">
        <div
          className={`${props.color} h-1.5 rounded-full `}
          style={{ width: `${props.width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HorizontalGraphItem;
