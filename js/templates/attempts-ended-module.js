import {createElement, renderTemplate} from "../utils";
import welcomeScreen from "./welcome-module";
import {results} from "./../data/models/endGame";

const attemptsEndedModule = (data) => `<section class="main main--result">
    <section class="logo" title="${data.title}"><h1>${data.title}</h1></section>

    <h2 class="title">${data.attempsEnded.title}</h2>
    <div class="main-stat">${data.attempsEnded.endsOfAttempts}</div>
    <span role="button" tabindex="0" class="main-replay">${data.playAgainLose}</span>
  </section>`;

const renderAttemptsEnded = () => {
  renderTemplate(createElement(attemptsEndedModule(results)));
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-replay`)) {
    evt.preventDefault();
    welcomeScreen();
  }
});

export default renderAttemptsEnded;
