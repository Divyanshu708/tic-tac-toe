// src/App.js
import React, { useState } from "react";
import GameSettings from "./components/GameSettings";
import Board from "./components/Board";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Score from "./components/Score";

const App = () => {
  const [gridSize, setGridSize] = useState(3);
  const [winStreak, setWinStreak] = useState(3);
  const [grid, setGrid] = useState(
    Array(3)
      .fill()
      .map(() => Array(3).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);
  const [winCount, setWinCount] = useState({ X: 0, O: 0 });
  const [open, setOpen] = useState(true);

  const handleSettingsChange = (size, streak) => {
    setGridSize(size);
    setWinStreak(streak);
    resetGame(size);
  };

  const resetGame = (size) => {
    setGrid(
      Array(size)
        .fill()
        .map(() => Array(size).fill(null))
    );
    setCurrentPlayer("X");
    setWinner(null);
    setDraw(false);
    setWinCount({ X: 0, O: 0 });
  };

  const resetToDefault = () => {
    setGridSize(gridSize);
    setWinStreak(winStreak);
    setGrid(
      Array(gridSize)
        .fill()
        .map(() => Array(gridSize).fill(null))
    );
    setCurrentPlayer("X");
    setWinner(null);
    setDraw(false);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    if (grid[rowIndex][colIndex] || winner || draw) return;

    const newGrid = grid.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? currentPlayer : cell
      )
    );

    setGrid(newGrid);
    if (checkWinner(newGrid, currentPlayer, rowIndex, colIndex)) {
      setWinner(currentPlayer);
      setWinCount((prevCount) => ({
        ...prevCount,
        [currentPlayer]: prevCount[currentPlayer] + 1,
      }));
      toast.success(` Player ${currentPlayer} Won! `);
      setTimeout(resetToDefault, 2500); // Reset to default after 1 second
    } else if (checkDraw(newGrid)) {
      setDraw(true);
      toast.error(` Its a Draw! `);
      setTimeout(resetToDefault, 2500); // Reset to default after 1 second
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkWinner = (grid, player, x, y) => {
    const directions = [
      [
        [0, 1],
        [0, -1],
      ], // Horizontal
      [
        [1, 0],
        [-1, 0],
      ], // Vertical
      [
        [1, 1],
        [-1, -1],
      ], // Diagonal down-right and up-left
      [
        [1, -1],
        [-1, 1],
      ], // Diagonal down-left and up-right
    ];

    for (const direction of directions) {
      let count = 1;

      for (const [dx, dy] of direction) {
        let nx = x + dx;
        let ny = y + dy;
        while (
          nx >= 0 &&
          ny >= 0 &&
          nx < gridSize &&
          ny < gridSize &&
          grid[nx][ny] === player
        ) {
          count += 1;
          nx += dx;
          ny += dy;
        }
      }

      if (count >= winStreak) {
        return true;
      }
    }

    return false;
  };

  const checkDraw = (grid) => {
    return grid.every((row) => row.every((cell) => cell !== null));
  };

  return (
    <>
      <Header setOpen={setOpen} open={open} />

      <div className="flex ticTab ">
        <div
          className={` ml-4 absolute lg:relative sm:w-[60%] md:w-[50%] lg:w-1/3 z-20`}
        >
          {open && (
            <GameSettings
              onSettingsChange={handleSettingsChange}
              winStreak={winStreak}
              setWinStreak={setWinStreak}
              gridSize={gridSize}
              setGridSize={setGridSize}
              setOpen={setOpen}
            />
          )}
        </div>

        <div className="grow z-10 shadow-lg bg-gray-200/50 rounded-lg sm:px-10 md:px-0 mx-5 flex justify-between flex-col">
          <div>
            <Board grid={grid} onCellClick={handleCellClick} />
          </div>

          <div className="mb-10 -my-10">
            <Score X={winCount.X} O={winCount.O} />

            <button
              onClick={() => resetGame(gridSize)}
              className=" bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-3 text-sm  md:text-lg lg:text-xl rounded focus:outline-none focus:shadow-outline md:ml-16 ml-5 lg:ml-16 xl:ml-32 mt-5 btn"
            >
              Reset score
            </button>
          </div>
        </div>
      </div>
      <Toaster
        className="fontUp"
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          className: "fontUp",
          success: {
            duration: 2500,
          },
          error: {
            duration: 2500,
          },
          style: {
            fontSize: "20px",
            maxWidth: "500px",
            padding: "20px 28px",
            backgroundColor: "white",
            color: "rgba(89, 94, 105, 0.829)",
            marginTop: "1.2rem",
            backgroundColor: "rgb(243 244 246 / 1)",
          },
        }}
      />
    </>
  );
};

export default App;
