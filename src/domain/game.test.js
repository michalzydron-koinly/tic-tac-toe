import { getNextPlayer, getWinner } from "./game";

describe("The game logic", () => {
  it("should return next player", () => {
    expect(getNextPlayer("X")).toBe("O");
    expect(getNextPlayer("O")).toBe("X");
  });

  it("should return a winner", () => {
    expect(getWinner(["X", "X", "X", "O", null, "O", null, null, null])).toBe(
      "X"
    );
    expect(getWinner(["O", null, "X", "X", "O", null, null, null, "O"])).toBe(
      "O"
    );
    expect(getWinner(["O", "X", null, "O", "X", null, "O", null, null])).toBe(
      "O"
    );
  });

  it("shouldn't return a winner", () => {
    expect(
      getWinner([null, null, null, null, null, null, null, null, null])
    ).toBe(null);
    expect(
      getWinner([null, null, null, "X", null, null, null, "O", null])
    ).toBe(null);
    expect(getWinner(["X", "O", "X", "O", "X", "O", "X", "O", "X"])).toBe(null);
  });
});
