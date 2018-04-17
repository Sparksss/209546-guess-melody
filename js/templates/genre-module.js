import {createElement, renderTemplate, checkAnswer} from "./../utils";
import successScreen from "./result-success-module";
import renderAttemptsEnded from "./attempts-ended-module";
import {game} from "./../data/models/game";
import countNotes from "./renderHeader";
import {gameOver, INITIAL_STATE, lostNote} from "../data/progress-bar-data";

const getTracks = (data) => {
  let listOfTracks = ``;
  for (let i = 0; i < data.answers.length; i++) {
    listOfTracks += ` <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${data.answers[i].src}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="${data.answers[i].title}"></label>
        </div>`;
  }
  return listOfTracks;
};

const countAnswers = [];

const genreModule = (data) => `<section class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(..#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">${countNotes(INITIAL_STATE)}</div>
    <div class="main-wrap">
      <h2 class="title">${data.genreLevels[0].title}</h2>
      <form class="genre">
        ${getTracks(game.genreLevels[0])}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;

const renderGenre = () => {
  renderTemplate(createElement(genreModule(game)));
};

const addAnswer = (answer) => {
  return countAnswers.push(answer);
};

const isCorrectAnswers = (answers) => answers.every((answer) => {
  return answer === true;
});

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`genre-answer-check`)) {
    evt.preventDefault();
    addAnswer(checkAnswer(event.target.htmlFor, game.genreLevels[0].answers));
    document.querySelector(`.genre-answer-send`).disabled = false;
  } else if (evt.target.classList.contains(`genre-answer-send`)) {
    evt.preventDefault();
    if (!isCorrectAnswers(countAnswers)) {
      if (!lostNote(INITIAL_STATE)) {
        renderAttemptsEnded();
      }
      document.querySelector(`.main-mistakes`).innerHTML = countNotes(gameOver(INITIAL_STATE));
    } else {
      INITIAL_STATE.answers.concat(countAnswers);
      successScreen();
    }
  }
});

export default renderGenre;
