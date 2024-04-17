// App.js
import { useState, useEffect } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const WIN_Condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });

  useEffect(() => {
    const storedScore = localStorage.getItem("tictactoeScore");
    if (storedScore) {
      setScore(JSON.parse(storedScore));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tictactoeScore", JSON.stringify(score));
  }, [score]);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      }
      return value;
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "X") {
        setScore((prevScore) => ({
          ...prevScore,
          xScore: prevScore.xScore + 1,
        }));
      } else {
        setScore((prevScore) => ({
          ...prevScore,
          oScore: prevScore.oScore + 1,
        }));
      }
      resetGame();
    } else {
      setBoard(updatedBoard);
      setXPlaying(!xPlaying);
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_Condition.length; i++) {
      const [a, b, c] = WIN_Condition[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.every((box) => box !== null)) {
      return "Tie";
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXPlaying(true);
  };

  return (
    <div >
      <ScoreBoard score={score} xPlaying={xPlaying} />
      <Board board={board} onClick={handleBoxClick} />
      {checkWinner(board) && (
        <div>
          {checkWinner(board) === "Tie"
            ? "It's a tie!"
            : `Player ${checkWinner(board)} has won the game!`}
        </div>
      )}
    </div>
  );
}

export default App;
