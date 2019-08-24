export const TETROMINOS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  I: {
    shpae: [[0, "I", 0, 0], [0, "I", 0, 0], [0, "I", 0, 0], [0, "I", 0, 0]],
    color: "80, 227, 230"
  },
  J: {
    shpae: [[0, "J", 0], [0, "J", 0], ["J", "J", 0]],
    color: "36, 95, 223"
  },
  L: {
    shpae: [[0, "L", 0], [0, "L", 0], [0, "L", "L"]],
    color: "223, 173, 36"
  },
  O: {
    shpae: [["O", "O"], ["O", "O"]],
    color: "223, 217, 36"
  },
  S: {
    shpae: [[0, "S", "S"], ["S", "S", 0], [0, 0, 0]],
    color: "48, 211, 56"
  },
  T: {
    shpae: [[0, 0, 0], ["T", "T", "T"], [0, "T", 0]],
    color: "132, 61, 198"
  },
  Z: {
    shpae: [["Z", "Z", 0], [0, "Z", "Z"], [0, 0, 0]],
    color: "227, 78, 78"
  }
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
