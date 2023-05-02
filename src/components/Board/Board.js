import Table from "react-bootstrap/Table";

import { Square } from "../Square/Square";

import "./Board.css";

export const Board = ({ onSquareClick, squareValues }) => {
  return (
    <Table className="table-bordered align-middle text-center Board">
      <tbody>
        {squareValues.map((value, index) => {
          if (index % 3 === 0) {
            return (
              // TODO: The key should be more unique
              <tr key={index}>
                <Square
                  onClick={() => onSquareClick(index)}
                  value={squareValues[index]}
                />
                <Square
                  onClick={() => onSquareClick(index + 1)}
                  value={squareValues[index + 1]}
                />
                <Square
                  onClick={() => onSquareClick(index + 2)}
                  value={squareValues[index + 2]}
                />
              </tr>
            );
          }

          return null;
        })}
      </tbody>
    </Table>
  );
};
