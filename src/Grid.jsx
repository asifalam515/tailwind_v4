import React from "react";

const Grid = () => {
  return (
    <div className="grid justify-items-center  grid-cols-3 gap-2 mt-2">
      <div className="h-16 w-16 rounded-full bg-blue-500 "></div>
      <div className="h-16 w-16 rounded-full  bg-red-500  "></div>
      <div className="h-16 w-16 rounded-full bg-green-500"></div>
    </div>
  );
};

export default Grid;
