import {createElement, renderTemplate} from "./../utils";
import artistScreen from "./artist-module";
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
  renderTemplate(createElement(getWelcomeElement(startGame)));
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-play`)) {
    artistScreen();
  }
});

export default welcomeScreen;

