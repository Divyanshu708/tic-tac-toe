// This Component shows the info about how many times a particular player has won the game
function Score({ X, O }) {
  return (
    <div className="mt-16 sm:mt-16 text-center text-base sm:text-lg md:text-xl lg:text-2xl flex justify-between px-6 md:px-16 lg:px-16 xl:px-32 fontUp text-gray-600/40">
      <p>
        Player(<span className="text-gray-600/90">X</span>) :{" "}
        <span className="text-gray-600/70"> {X}</span>
      </p>
      <p>
        Player (<span className="text-gray-600/90">O</span>) :{" "}
        <span className="text-gray-600/70">{O}</span>
      </p>
    </div>
  );
}

export default Score;
