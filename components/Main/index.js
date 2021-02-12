import Board from "./Board";

function renderError(msg) {
  // TODO: Add some classes for CSS...
  return `<p>${msg}</p>`;
}

export default ({ board, error }) => `<main>
${Board(board)}
  ${error ? renderError(error) : ""}
  </main>`;
