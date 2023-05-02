import Table from "react-bootstrap/Table";

import { Square } from "../Square/Square";

import "./Board.css";
export const Board = ({ currentPlayer, onSquareClick, squareValues }) => {
  const handleSquareClick = (index) => {
    if (squareValues[index]) {
      return;
    }

    const nextSquareValues = squareValues.slice();
    nextSquareValues[index] = currentPlayer;

    onSquareClick(nextSquareValues);
  };

  return (
    <Table className="table-bordered align-middle text-center Board">
      <tbody>
        {squareValues.map((value, index) => {
          if (index % 3 === 0) {
            return (
              // TODO: The key should be more unique
              <tr key={index}>
                <Square
                  onClick={() => handleSquareClick(index)}
                  value={squareValues[index]}
                />
                <Square
                  onClick={() => handleSquareClick(index + 1)}
                  value={squareValues[index + 1]}
                />
                <Square
                  onClick={() => handleSquareClick(index + 2)}
                  value={squareValues[index + 2]}
                />
              </tr>
            );
          }
        })}
      </tbody>
    </Table>
  );
};
