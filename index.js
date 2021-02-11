import { Main } from "./components";

const root = document.getElementById("root");

const state = {
  board: Array.from({ length: 9 }, (_, i) => i),
  names: ["mark", "jeff"],
  currentPlayer: null,
  winner: null,
};

const render = (st = state) => {
  root.innerHTML = Main(st);

  if (st.names.length < 2) {
    root.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      state.names = [...st.names, e.target.elements[0].value];
      render();
    });
  } else {
    document.querySelectorAll("div[data-num]").forEach((square) => {
      square.addEventListener("click", function handleClick() {
        const { board: updatedBoard } = st;
        updatedBoard[this.dataset.num] = "X";
        state.board = [...updatedBoard];
        render();
      });
    });
  }
};

render();
