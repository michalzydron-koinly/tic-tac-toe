import { PLAYER_O, PLAYER_X, WINNING_SEQUENCES } from "../constants/game";

export const getNextPlayer = (currentPlayer) => {
  let nextPlayer;

  if (currentPlayer === PLAYER_X) {
    nextPlayer = PLAYER_O;
  } else {
    nextPlayer = PLAYER_X;
  }

  return nextPlayer;
};

export const getWinner = (squareValues) => {
  let winner = null;

  WINNING_SEQUENCES.forEach(([a, b, c]) => {
    if (
      squareValues[a] &&
      squareValues[a] === squareValues[b] &&
      squareValues[a] === squareValues[c]
    ) {
      winner = squareValues[a];
    }
  });

  return winner;
};
