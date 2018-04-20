import {game} from "./../data/models/game";
import {checkAnswer, renderTemplate} from "./../utils";
import {gameOver, INITIAL_STATE, lostNote} from "./../data/progress-bar-data";
import genreScreen from "./genre-module";
import ArtistView from "./view/artistView";
import renderAttemptsEnded from "./attempts-ended-module";
import countNotes from "./renderHeader";


const renderArtist = () => {
  let levels = 0;
  const artistView = new ArtistView(game, INITIAL_STATE, levels);

  artistView.changeView = (evt) => {
    let currentAnswer = checkAnswer(evt.target.alt, game.artistLevels[levels].answers);
    INITIAL_STATE.answers.push(currentAnswer);
    if (!currentAnswer) {
      if (!lostNote(INITIAL_STATE)) {
        renderAttemptsEnded();
      }
      document.querySelector(`.main-mistakes`).innerHTML = countNotes(gameOver(INITIAL_STATE));
    } else {
      if (levels < game.artistLevels.length - 1) {
        ++levels;
        renderTemplate(new ArtistView(game, INITIAL_STATE, levels));
      } else {
        genreScreen();
      }
    }
  };
};

export default renderArtist;
