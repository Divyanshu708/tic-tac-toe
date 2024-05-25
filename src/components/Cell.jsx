// src/components/Cell.js
import React from "react";

const Cell = ({ value, onClick, gridLen }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-14 border-2 border-gray-300 flex items-center justify-center text-2xl"
    >
      {value}
    </button>
  );
};

export default Cell;
