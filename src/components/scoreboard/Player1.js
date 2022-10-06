import React from "react"

const Player1 = ({ scores }) => {
  return (
  <div className="score">
    <h1>Player 1</h1>
    <p>{scores}</p>
  </div>
  )
}
export default Player1