import React from 'react'
import Player1 from "./Player1.js"
import Player2 from "./Player2.js"
import Draws from "./Draws.js"

const Scoreboard = ({ scores }) => {
  const [p1Score, p2Score, draws] = scores
  return (
    <div className="scoreboard">
      <Player1 scores={p1Score}/>
      <h1 className="divider">-</h1>
      <Draws scores={draws} />
      <h1 className="divider">-</h1>
      <Player2 scores={p2Score}/>
    </div>
  )
}

export default Scoreboard