// src/components/Board.js
import React from "react";
import Cell from "./Cell";

const Board = ({ grid, onCellClick }) => {
  let gridLen = grid.length;

  return (
    <div className="flex justify-center board">
      <div
        className={`grid gap-2 grow md:flex-none sm:w-[100%] md:w-[100%] lg:w-[50%] m-4 mt-6 ${
          gridLen <= 4
            ? "lg:scale-[90%] w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl 2xl:w-[50%] -mb-10"
            : gridLen === 5
            ? "lg:scale-[90%] w-[95%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl 2xl:w-[60%] -mb-10"
            : gridLen === 6
            ? "lg:scale-[90%] w-[90%] sm:w-[90%] md:w-[75%] lg:w-[90%] 2xl:w-[50%] -mb-10"
            : gridLen === 7
            ? "w-[90%] sm:w-[90%] md:w-[80%] lg:w-[80%] 2xl:w-[50%] mt-5 lg:mt-10"
            : gridLen === 8
            ? "lg:scale-[75%] w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl 2xl:w-[60%] lg:-mt-10"
            : gridLen === 9
            ? " lg:scale-[90%] w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl 2xl:w-[60%]"
            : gridLen === 10
            ? "lg:scale-[90%] w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[75%] 2xl:w-[55%] -mb-10"
            : ""
        }`}
        style={{
          gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
          gap: `${
            grid.length >= 5 && grid.length <= 7
              ? "0.25rem"
              : grid.length > 7
              ? "0.15rem"
              : ""
          }`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onClick={() => onCellClick(rowIndex, colIndex)}
              gridLen={grid.length}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
