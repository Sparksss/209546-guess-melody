import {createElement, renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-module";
import {results} from "./../data/models/endGame";

const timeOut = (data) => `<section class="main main--result">
    <section class="logo" title="${data.title}"><h1>${data.title}</h1></section>
    <h2 class="title">${data.timeOut.title}</h2>
    <div class="main-stat">${data.timeOut.endsOfTime}</div>
    <span role="button" tabindex="0" class="main-replay">${data.playAgainLose}</span>
  </section>`;


const renderTimeOut = () => {
  renderTemplate(createElement(timeOut(results)));
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-replay`)) {
    evt.preventDefault();
    welcomeScreen();
  }
});

export default renderTimeOut;
