import { useState } from "react";

import { Board } from "../Board/Board";
import { PLAYER_O, PLAYER_X } from "../../constants/players";
import { Winner } from "../Winner/Winner";

import "./Game.css";

export const Game = () => {
  const [squareValues, setSquareValues] = useState([
    PLAYER_X,
    PLAYER_O,
    null,
    null,
    PLAYER_X,
    PLAYER_O,
    null,
    PLAYER_X,
    PLAYER_O,
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);

  const winner = null;

  return (
    <div className="Game">
      <Board
        currentPlayer={currentPlayer}
        onSquareClick={setSquareValues}
        squareValues={squareValues}
      />
      {winner ? (
        <Winner player={winner} />
      ) : (
        <p>Current player: {currentPlayer}</p>
      )}
    </div>
  );
};
