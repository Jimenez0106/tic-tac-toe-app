import React from "react";

const Rematch = ({setBoard, setVictory}) => {
  //Clear Board & reset victor
  return (
    <div className="rematch">
      <button className="glow-button" onClick={(e) => {
        e.preventDefault()
        setBoard(
          [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]
        )
        setVictory(false)
      }}>Rematch?</button>
    </div>
  )
}

export default Rematch