export default (board) =>
  board.map((b, i) => `<div data-num=${i}>${b}</div>`).join("\n");
