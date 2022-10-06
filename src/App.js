import React, { useState } from "react";
import MainBoard from "./components/mainboard/MainBoard.js"
import Scoreboard from "./components/scoreboard/Scoreboard.js"
import Rematch from "./components/Rematch.js"
import Status from "./components/Status.js"
import "./App.css";

const App = () => {
    const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState(true);
  const [victory, setVictory] = useState("");
  const [scores, setScores] = useState([0, 0, 0])

  return (
    <div className="App">
      {victory ? <Rematch setVictory={setVictory} setBoard={setBoard}/> : <></>}
      <div className="container">
        <h1 className="title">ReactJS Tic-Tac-Toe</h1>
      </div>
      <div className="container">
        <div className="board">  
          <MainBoard
            board={board}
            setBoard={setBoard}
            turn={turn}
            setTurn={setTurn}
            setVictory={setVictory}
            scores={scores}
            setScores={setScores}
          />
          <div className="status">
            <Status turn={turn} victory={victory}/>
          </div>
        </div>
      </div>
      <div className="container">
        <Scoreboard scores={scores} />
      </div>
    </div>
  );
};

export default App;