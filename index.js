import { Main } from "./components";

const root = document.getElementById("root");

const state = {
  board: Array.from({ length: 9 }, () => ""),
  currentChar: "X",
};

const render = (st = state) => {
  root.innerHTML = Main(st);
};

render();
