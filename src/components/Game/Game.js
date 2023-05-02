import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { Board } from "../Board/Board";
import { getNextPlayer, getWinner } from "../../domain/game";
import { MAX_MOVES, PLAYER_X } from "../../constants/game";
import { socket } from "../../services/socket";
import { Winner } from "../Winner/Winner";

import "./Game.css";

const defaultSquareValues = Array(9).fill(null);
const defaultMove = 0;
const defaultPlayer = PLAYER_X;

export const Game = () => {
  const [squareValues, setSquareValues] = useState(defaultSquareValues);
  const [currentPlayer, setCurrentPlayer] = useState(defaultPlayer);
  const [currentMove, setCurrentMove] = useState(defaultMove);

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

    const nextCurrentStep = currentMove + 1;
    setCurrentMove(nextCurrentStep);
  };

  const handleStartNewGameButtonClick = () => {
    setSquareValues(defaultSquareValues);
    setCurrentPlayer(defaultPlayer);
    setCurrentMove(defaultMove);

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
        <Winner player={winner} />
      ) : (
        <p>Current player: {currentPlayer}</p>
      )}
      {(winner || currentMove > MAX_MOVES) && (
        <Button onClick={handleStartNewGameButtonClick}>Start new game</Button>
      )}
    </div>
  );
};
