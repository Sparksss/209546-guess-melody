import {renderTemplate, checkAnswer} from "./../utils";
import successScreen from "./view/result-success-module";
import renderAttemptsEnded from "./attempts-ended-screen";
import {game} from "./../data/models/game";
import countNotes from "./renderHeader";
import {gameOver, INITIAL_STATE, lostNote} from "../data/progress-bar-data";
import GenreView from "./view/genreView";


const renderGenre = () => {
  const countAnswers = [];
  const genreView = new GenreView(game, INITIAL_STATE);

  const addAnswer = (answer) => {
    return countAnswers.push(answer);
  };

  const isCorrectAnswers = (answers) => answers.every((answer) => {
    return answer === true;
  });

  genreView.changeScreen = (evt) => {
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
  };
  renderTemplate(genreView.element);
};

export default renderGenre;

