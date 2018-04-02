import welcome from "./templates/-welcome";
import artist from "./templates/-artist-module";
import genre from "./templates/-genre";
import success from "./templates/-result-success";
import timeOut from "./templates/-time-out";
import attemptsEnded from "./templates/-attempts-ended";

const getRandomResult = () => {
  return parseInt(Math.random() * (3 - 1) + 1, 10);
};

const resultScreens = [
  success,
  timeOut,
  attemptsEnded
];

welcome();

document.addEventListener(`click`, (evt) => {
  let renderScreen;
  if (evt.target.classList.contains(`main-play`)) {
    renderScreen = artist;
  } else if (evt.target.classList.contains(`main-answer-preview`)) {
    renderScreen = genre;
  } else if (evt.target.classList.contains(`player-control--play`)) {
    evt.preventDefault();
    document.querySelector(`.genre-answer-send`).disabled = false;
  } else if (evt.target.classList.contains(`genre-answer-send`)) {
    evt.preventDefault();
    renderScreen = resultScreens[getRandomResult()];
  } else if (evt.target.classList.contains(`main-replay`)) {
    evt.preventDefault();
    renderScreen = welcome;
  }
  if (renderScreen) {
    renderScreen();
  }
});
