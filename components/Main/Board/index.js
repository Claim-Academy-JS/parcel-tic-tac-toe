export default (board) =>
  board
    .map((b, i) => `<div data-num=${i}>${typeof b === "string" ? b : ""}</div>`)
    .join("\n");
