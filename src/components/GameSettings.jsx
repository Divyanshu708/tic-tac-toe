import React from "react";
import { useMediaQuery } from "react-responsive";

//this component will give a form to customize the game
function GameSettings({
  onSettingsChange,
  winStreak,
  setWinStreak,
  gridSize,
  setGridSize,
  setOpen,
}) {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  function handleSubmit(e) {
    // To handle the Submit botton on the form to customize the game
    e.preventDefault();
    if (
      gridSize >= 3 &&
      gridSize <= 10 &&
      winStreak >= 3 &&
      winStreak <= gridSize
    ) {
      onSettingsChange(gridSize, winStreak);
    } else {
      alert("Please enter valid grid size and win streak values.");
    }
  }

  function handleClose() {
    // To handle the close botton on the form
    setOpen(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded-lg shadow-md "
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Grid Size (n x n):
        </label>
        <input
          type="number"
          value={gridSize}
          onChange={(e) => setGridSize(parseInt(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="3"
          max="10"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Win Streak (m):
        </label>
        <input
          type="number"
          value={winStreak}
          onChange={(e) => setWinStreak(parseInt(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1"
        />
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn"
        >
          Save Setting
        </button>
        {isMobile && (
          <button
            type="submit"
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline btn"
            onClick={handleClose}
          >
            Close
          </button>
        )}
      </div>
    </form>
  );
}

export default GameSettings;
