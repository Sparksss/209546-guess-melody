import {game} from "./../data/models/game";
import {checkAnswer, renderTemplate} from "./../utils";
import {gameOver, INITIAL_STATE, lostNote} from "./../data/progress-bar-data";
import renderGenre from "./genre-screen";
import ArtistView from "./view/artistView";
import renderAttemptsEnded from "./attempts-ended-screen";
import countNotes from "./renderHeader";


const renderArtist = () => {
  let levels = 0;
  const artistView = new ArtistView(game, INITIAL_STATE, levels);
  renderTemplate(artistView.element);

  artistView.changeView = (evt) => {
    if (evt.target.classList.contains(`main-answer-preview`)) {
      let currentAnswer = checkAnswer(evt.target.alt, game.artistLevels[levels].answers);
      INITIAL_STATE.answers.push({answer: currentAnswer, timeLimit: 32});
      if (!currentAnswer) {
        if (!lostNote(INITIAL_STATE)) {
          renderAttemptsEnded();
        }
        document.querySelector(`.main-mistakes`).innerHTML = countNotes(gameOver(INITIAL_STATE));
      } else {
        if (levels < game.artistLevels.length - 1) {
          ++levels;
          renderTemplate(new ArtistView(game, INITIAL_STATE, levels).element);
        } else {
          renderGenre();
        }
      }
    }
  };
};

export default renderArtist;
