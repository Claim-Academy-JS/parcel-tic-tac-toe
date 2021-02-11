import { Main } from "./components";

const root = document.getElementById("root");

const state = {
  board: Array.from({ length: 9 }, (_, i) => i),
  player1Name: "",
  player2Name: "",
  currentPlayer: null,
  winner: null,
};

const render = (st = state) => {
  root.innerHTML = Main(st);
};

render();
