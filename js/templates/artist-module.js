import createElement from '../create-elem';
import renderScreen from "../render-screen";
import genreScreen from "./genre-module";
import {game} from "./../data/models/game";

const renderListOfArtists = (data) => {
  let listArtists = ``;
  for (let i = 0; i < data.answers.length; i++) {
    listArtists += `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="http://placehold.it/134x134"
                 alt="${data.answers[i].title}" width="134" height="134">
            ${data.answers[i].title}
          </label>
        </div>`;
  }
  return listArtists;
};

const artistsModule = (data) => `<section class="main main--level main--level-artist">
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
    <div class="main-mistakes"></div>
    <div class="main-wrap">
      <h2 class="title main-title">${data.artistLevels[0].title}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed" autoplay></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">${renderListOfArtists(game.artistLevels[1])}</form>
    </div>
  </section>`;

const artistElement = createElement(artistsModule(game));


const renderArtistScreen = () => {
  renderScreen(artistElement);
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-answer-preview`)) {
    genreScreen();
  }
});

export default renderArtistScreen;
