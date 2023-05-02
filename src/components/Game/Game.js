import { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { Board } from "../Board/Board";
import { getNextPlayer, getWinner } from "../../domain/game";
import { PLAYER_X } from "../../constants/game";
import { socket } from "../../services/socket";
import { Winner } from "../Winner/Winner";

import "./Game.css";

const defaultSquareValues = Array(9).fill(null);

export const Game = () => {
  const [squareValues, setSquareValues] = useState(defaultSquareValues);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);

  const winner = getWinner(squareValues);

  // useEffect(() => {
  //   socket.connect("ws://localhost:1234");
  //
  //   socket.on("square values", (nextSquareValues) => {
  //     setSquareValues(nextSquareValues);
  //   });
  //   socket.on("current player", (nextCurrentPlayer) => {
  //     setCurrentPlayer(nextCurrentPlayer);
  //   });
  //
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const handleSquareClick = (index) => {
    if (winner || squareValues[index]) {
      return;
    }

    const nextSquareValues = squareValues.slice();
    nextSquareValues[index] = currentPlayer;
    setSquareValues(nextSquareValues);

    // socket.emit('square values', squareValues);

    const nextPlayer = getNextPlayer(currentPlayer);
    setCurrentPlayer(nextPlayer);
  };

  const handleStartNewGameButtonClick = () => {
    setSquareValues(defaultSquareValues);

    // socket.emit('new-game');
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
          <Button onClick={handleStartNewGameButtonClick}>Start new game</Button>
        </Fragment>
      ) : (
        <p>Current player: {currentPlayer}</p>
      )}
    </div>
  );
};
