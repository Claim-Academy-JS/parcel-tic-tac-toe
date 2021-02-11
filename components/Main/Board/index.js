export default (board) =>
  board.map((b, i) => `<div data-num=${i}></div>`).join("\n");
