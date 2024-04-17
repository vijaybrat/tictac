/* eslint-disable react/prop-types */
import Box from "./Box";

function Board({ board, onClick }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {board.map((value, index) => (
        <Box
          key={index}
          value={value}
          onClick={() => (value === null) && onClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
