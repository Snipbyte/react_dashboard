import React from "react";

const Jumbotron = () => {
  return (
    <div className="flex bg-gray-100 items-center justify-between text-black-500 w-full md:p-[30px] p-2 rounded-lg">
      <div className="w-9/12 md:text-base text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="mx-2">
        <button className="bg-indigo-500 text-white rounded-md p-2 text-center w-[120px]">
          Button
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
