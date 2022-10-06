import React from "react";

const Square = ({ board, setBoard, turn, setTurn, row, column, setVictory, scores, setScores }) => {
  //Announce winner and update score
  const scoreUpdater = (player) => {
    let [p1Score, p2Score, draws] = scores;
    player === "Player 1" ? p1Score += 1 : p2Score += 1
    setVictory(player)
    setScores([p1Score, p2Score, draws])
  }

  //Flatten board and search for unused squares
  const drawChecker = () => {
    if (board.flat().includes("")) {
      return false
    }
    //Add to the draw score
    setVictory("Draw")
    let [p1Score, p2Score, drawScore] = scores;
    drawScore += 1
    setScores([p1Score, p2Score, drawScore])
    return true
  }

  //Check for win
  const winChecker = () => {
    //Check if draw
    if (drawChecker()) { 
      return
    }
    //All winning pattern directions
    const winningCombinations = {
      horizontal: [
        ["00", "01", "02"],
        ["10", "11", "12"],
        ["20", "21", "22"],
      ],
      vertical: [
        ["00", "10", "20"],
        ["01", "11", "21"],
        ["02", "12", "22"],
      ],
      diagonal: [
        ["00", "11", "22"],
        ["02", "11", "20"],
      ]
    }
    //Check every combination
    for (const direction in winningCombinations) {
      winningCombinations[direction].forEach((combo) => {
        //return if any of the positions in combo are empty
        if (!board[combo[0][0]][combo[0][1]] || !board[combo[1][0]][combo[1][1]] || !board[combo[2][0]][combo[2][1]]) return
        //if all 3 positions are the same
        if (board[combo[0][0]][combo[0][1]] === board[combo[1][0]][combo[1][1]] && board[combo[0][0]][combo[0][1]] === board[combo[2][0]][combo[2][1]]) {
          board[combo[0][0]][combo[0][1]] === "X" ? scoreUpdater('Player 1') : scoreUpdater('Player 2')
        }
      }) 
    }
  }

  //Set Square to 'X' or 'O' and update board
  const squareHandler = (row, column) => {
    let currentBoard = [...board];
    //Prevent overwriting
    if (currentBoard[row][column] === "X" || currentBoard[row][column] === "O")
      return;
    //Set Square to 'X' or 'O' based on turn
    turn
      ? (currentBoard[row][column] = "X")
      : (currentBoard[row][column] = "O");
      //update board & turn order
    setTurn(!turn);
    setBoard(currentBoard);
    winChecker();
  };

  return (
    <button
      className={board[row][column] === "X" ? "square X" : "square O"}
      onClick={(e) => {
        e.preventDefault();
        squareHandler(row, column);
      }}
    >
      {board[row][column]}
    </button>
  );
};

export default Square;
