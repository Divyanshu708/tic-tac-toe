// src/components/Board.js
import React from "react";
import Cell from "./Cell";

const Board = ({ grid, onCellClick }) => {
  let gridLen = grid.length;

  return (
    <div className="flex justify-center ">
      <div
        className={`grid gap-2 grow md:flex-none sm:w-[100%] md:w-[100%] lg:w-[50%] m-4 ${
          gridLen === 7
            ? "lg:w-[55%] "
            : gridLen === 8
            ? "lg:scale-[80%] "
            : gridLen === 9
            ? "lg:scale-[80%] "
            : gridLen === 10
            ? "lg:scale-[75%]"
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

          width: `${
            grid.length === 7
              ? "55%"
              : grid.length === 8
              ? "60%"
              : grid.length === 9
              ? "70%"
              : grid.length === 10
              ? "85%"
              : ""
          }`,

          //   marginTop: `${
          //     grid.length === 8
          //       ? "-3rem"
          //       : grid.length === 9
          //       ? "-6rem"
          //       : grid.length === 10
          //       ? "-9rem"
          //       : ""
          //   }`,
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
