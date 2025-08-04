import React from "react";

const Flexbox = () => {
  return (
    <div className="flex items-center flex-col space-y-6">
      <div className="h-16 w-16 rounded-full bg-blue-500 "></div>
      <div className="h-16 w-16 rounded-full bg-red-500  "></div>
      <div className="h-16 w-16 rounded-full bg-green-500"></div>
    </div>
  );
};

export default Flexbox;
