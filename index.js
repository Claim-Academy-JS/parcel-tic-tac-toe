import { Main } from "./components";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = Main();
};

render();
