import React from "react";
import Square from "./Square.js";

const MainBoard = ({ board, setBoard, turn, setTurn, victory,  setVictory, scores, setScores }) => {
  //Create square spaces as 3x3
  const rows = 3;
  const columns = 3;
  const createSquares = []
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        createSquares.push([i, j])         
      }
  }
  return (
    <>
      {createSquares.map((position, id) => {
        const [row, column] = position
        return <Square
        key={id}
        board={board}
        setBoard={setBoard}
        turn={turn}
        setTurn={setTurn}
        row={row}
        column={column}
        setVictory={setVictory}
        scores={scores}
        setScores={setScores}
      />
      })}
    </>
  )
};

export default MainBoard;
