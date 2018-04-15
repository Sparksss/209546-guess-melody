import createElement from "../create-elem";
import renderScreen from "../render-screen";
import artistScreen from "./artist-module";
import {getNotes} from "./pieces/progressBar";
import {INITIAL_STATE} from "../data/progress-bar-data";
import {startGame} from "./../data/models/startGame";

const getWelcomeElement = (data) => `<section class="main main--welcome">
    <section class="logo" title="${data.title}"><h1>${data.title}</h1></section>
    <button class="main-play">${data.start}</button>
    <h2 class="title main-title">${data.rules.title}</h2>
    <p class="text main-text">
      ${data.rules.description}<br>
      ${data.rules.warnings}<br>
      ${data.rules.inf}
    </p>
  </section>`;

const welcomeScreen = () => {
  renderScreen(createElement(getWelcomeElement(startGame)));
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-play`)) {
    artistScreen();
    document.querySelector(`.main-mistakes`).appendChild(createElement(getNotes(INITIAL_STATE)));
  }
});

export default welcomeScreen;

