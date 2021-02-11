import Board from "./Board";
import Input from "./NameInput";

function ask4Name([p1]) {
  return p1 ? Input("Player 2") : Input("Player 1");
}

export default ({ board, names }) =>
  `<main>${names.length === 2 ? Board(board) : ask4Name(names)}</main>`;
