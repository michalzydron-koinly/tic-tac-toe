import "./Square.css";

export const Square = ({ onClick, value }) => {
  return (
    <td className="Square" onClick={onClick}>
      {value}
    </td>
  );
};
