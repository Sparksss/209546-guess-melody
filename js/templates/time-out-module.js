import createElement from '../create-elem';
import renderScreen from "../render-screen";
import welcomeScreen from "./welcome-module";
import {results} from "./../data/models/endGame";

const timeOut = (data) => `<section class="main main--result">
    <section class="logo" title="${data.title}"><h1>${data.title}</h1></section>

    <h2 class="title">${data.timeOut.title}</h2>
    <div class="main-stat">${data.timeOut.endsOfTime}<br>${data.timeOut.lose}</div>
    <span role="button" tabindex="0" class="main-replay">${data.playAgainLose}</span>
  </section>`;


const renderTimeOut = () => {
  renderScreen(createElement(timeOut(results)));
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-replay`)) {
    evt.preventDefault();
    welcomeScreen();
  }
});

export default renderTimeOut;
