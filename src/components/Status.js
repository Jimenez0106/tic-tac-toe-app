import React from 'react'

const Status = ({turn, victory}) => {
  //Display victorious player
  switch (victory) {
    case "Player 1":
      return <p className="X">Player 1 Wins (X)!</p>
    
    case "Player 2":
      return <p className="O">Player 2 Wins (O)!</p>
    
    case "Draw":
      return <p>Draw!</p>
  
    default:
      //Display player turn
      
      return (turn ? <p className="X">Player 1's Turn (X)</p> : <p className="O">Player 2's Turn (O)</p>)
  }
}

export default Status