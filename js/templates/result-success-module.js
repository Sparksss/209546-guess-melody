import {createElement, renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-module";
import {results} from "./../data/models/endGame";

const resultSuccessModule = (data) => `<section class="main main--result">
    <section class="logo" title="${data.title}"><h1>${data.title}</h1></section>

    <h2 class="title">${data.succes.title}</h2>
    <div class="main-stat">${data.succes.time}
      <br>${data.succes.pointsCount}
      <br>${data.succes.errorsCount}</div>
    <span class="main-comparison">${data.succes.raiting}</span>
    <span role="button" tabindex="0" class="main-replay">${data.playAgainSucces}</span>
  </section>`;


const renderResultSucces = () => {
  renderTemplate(createElement(resultSuccessModule(results)));
};


document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-replay`)) {
    evt.preventDefault();
    welcomeScreen();
  }
});

export default renderResultSucces;
