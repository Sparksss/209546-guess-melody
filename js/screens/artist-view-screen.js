import {game} from "./../data/models/game";
import {checkAnswer, renderTemplate} from "./../utils";
import {lostNote, gameOver} from "./../data/models/initialization-state";
import ArtistView from "../view/artist-view";
import renderAttemptsEnded from "./attempts-ended-screen";
import changeView from "../change-state";


const renderArtist = (state) => {
  const artistView = new ArtistView(game, state.level);

  renderTemplate(artistView.element);

  artistView.changeView = (evt) => {
    if (evt.target.classList.contains(`main-answer-preview`)) {
      let currentAnswer = checkAnswer(evt.target.alt, game.levels[state.level].answers);
      state.answers.push({answer: currentAnswer, timeLimit: 32});
      if (!currentAnswer) {
        if (!lostNote(state)) {
          renderAttemptsEnded();
        }
        gameOver(state);
      }
      ++state.level;
      changeView(state);
    }
  };
};

export default renderArtist;
