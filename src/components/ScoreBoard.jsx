/* eslint-disable react/prop-types */
function ScoreBoard({ score, xPlaying }) {
    const { xScore, oScore } = score;
  
    return (
      <div className="flex flex-row items-center justify-evenly w-80 text-xl bg-white m-auto rounded-lg shadow-md font-bold mb-10">
        <span
          className={`w-full text-center py-4 ${
            xPlaying
              ? "text-blue-500 border-b-4 border-blue-500 rounded-tl-lg"
              : "text-gray-500 border-b-4 border-gray-500 rounded-tl-lg"
          }`}
        >
          X - {xScore}
        </span>
        <span
          className={`w-full text-center py-4 ${
            xPlaying
              ? "text-gray-500 border-b-4 border-gray-500 rounded-tr-lg"
              : "text-red-500 border-b-4 border-red-500 rounded-tr-lg"
          }`}
        >
          O - {oScore}
        </span>
      </div>
    );
  }
  
  export default ScoreBoard;