// src/components/Cell.js
import React from "react";

const Cell = ({ value, onClick, gridLen }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full border-2 border-gray-300 flex items-center justify-center text-gray-500/80 fontUp ${
        gridLen === 3
          ? "h-36 sm:h-44 lg:h-52 lg:border-4 text-7xl"
          : gridLen === 4
          ? "h-24 sm:h-32 md:h-36 lg:border-4 text-6xl"
          : gridLen === 5
          ? "h-24 sm:h-28 md:h-32 lg:border-4 text-4xl sm:text-5xl"
          : gridLen === 6
          ? "h-16 sm:h-20 md:h-24 lg:border-4 text-3xl sm:text-5xl"
          : gridLen === 7
          ? "h-16 sm:h-20  xl:border-4 text-2xl sm:text-3xl md:text-4xl"
          : gridLen === 8
          ? "h-16 sm:h-16 md:h-16 lg:h-20 lg:border-4 text-2xl sm:text-3xl md:text-4xl"
          : gridLen === 9
          ? "h-12 sm:h-16 md:h-16 lg:h-16 lg:border-4  text-xl sm:text-3xl md:text-4xl"
          : // text-xl md:text-2xl lg:text-4xl
          gridLen === 10
          ? "h-10 sm:h-14 xl:h-16 lg:border-4 text-xl sm:text-2xl  md:text-3xl"
          : // text-xl md:text-2xl lg:text-4xl
            ""
      }`}
    >
      {value}
    </button>
  );
};

export default Cell;
