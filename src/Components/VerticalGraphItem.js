import React from "react";

const VerticalGraphItem = (props) => {
  return (
    <div className="my-2 md:mx-5 mx-2">
      <div className="flex flex-col items-center">
        <div
          className="bg-white w-2 rounded-full mb-4 relative"
          style={{ height: "100px" }}
        >
          <div
            className={`${props.color} w-2 rounded-full absolute bottom-0`}
            style={{
              height: `${props.height}%`,
              top: `${100 - props.height}%`,
            }}
          ></div>
        </div>
        <div className="text-xs text-gray-400">{props.title}</div>
      </div>
    </div>
  );
};

export default VerticalGraphItem;
