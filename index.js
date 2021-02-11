import { Main } from "./components";

const root = document.getElementById("root");

const state = {
  board: Array.from({ length: 9 }, () => ""),
  currentChar: "X",
};

const render = (st = state) => {
  root.innerHTML = Main(st);

  document.querySelectorAll("main div").forEach((div) => {
    div.addEventListener("click", function handleClick() {
      const { board: updatedBoard } = st;
      updatedBoard[this.dataset.num] = st.currentChar;

      state.board = [...updatedBoard];
      state.currentChar = st.currentChar === "X" ? "O" : "X";
      render();
    });
  });
};

render();
