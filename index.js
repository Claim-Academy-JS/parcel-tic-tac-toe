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
      // Destructure 'board' out of 'st' and rename it as 'updatedBoard'
      const { board: updatedBoard } = st;

      // Use the 'data attribute' of whatever was clicked to find the correct index in the 'board array.'
      updatedBoard[this.dataset.num] = st.currentChar;

      // Avoid mutations
      state.board = [...updatedBoard];
      state.currentChar = st.currentChar === "X" ? "O" : "X";
      render();
    });
  });
};

render();
