import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

import { Board } from "../Board/Board";
import { getNextPlayer, getWinner } from "../../domain/game";
import { PLAYER_X } from "../../constants/game";
import { Winner } from "../Winner/Winner";

import "./Game.css";

const defaultSquareValues = Array(9).fill(null);

export const Game = () => {
  const [squareValues, setSquareValues] = useState(defaultSquareValues);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);

  const winner = getWinner(squareValues);

  const handleSquareClick = (index) => {
    if (winner || squareValues[index]) {
      return;
    }

    const nextSquareValues = squareValues.slice();
    nextSquareValues[index] = currentPlayer;
    setSquareValues(nextSquareValues);

    const nextPlayer = getNextPlayer(currentPlayer);
    setCurrentPlayer(nextPlayer);
  };

  const handleResetButtonClick = () => {
    setSquareValues(defaultSquareValues);
  };

  return (
    <div className="Game">
      <Board
        currentPlayer={currentPlayer}
        onSquareClick={handleSquareClick}
        squareValues={squareValues}
      />
      {winner ? (
        <Fragment>
          <Winner player={winner} />
          <Button onClick={handleResetButtonClick}>Reset game</Button>
        </Fragment>
      ) : (
        <p>Current player: {currentPlayer}</p>
      )}
    </div>
  );
};
