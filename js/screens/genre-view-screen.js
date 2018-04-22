import changeView from "../change-state";
import {renderTemplate, checkAnswer} from "./../utils";
import renderAttemptsEnded from "./attempts-ended-screen";
import {game} from "./../data/models/game";
import {lostNote, gameOver} from "./../data/models/initialization-state";
import GenreView from "../view/genre-view";

const renderGenre = (state) => {
  const countAnswers = [];
  const genreView = new GenreView(game, state.level, state);
  const addAnswer = (answer) => {
    return countAnswers.push(answer);
  };

  const isCorrectAnswers = (answers) => answers.every((answer) => {
    return answer === true;
  });

  genreView.changeScreen = (evt) => {
    if (evt.target.classList.contains(`genre-answer-check`)) {
      evt.preventDefault();
      addAnswer(checkAnswer(evt.target.htmlFor, game.levels[state.level].answers));
      document.querySelector(`.genre-answer-send`).disabled = false;
    } else if (evt.target.classList.contains(`genre-answer-send`)) {
      evt.preventDefault();
      const isCorrectAnswer = isCorrectAnswers(countAnswers);
      if (!isCorrectAnswer) {
        if (!lostNote(state)) {
          renderAttemptsEnded();
        }
        gameOver(state);
      }
      state.answers.push({answer: isCorrectAnswer, timeLimit: 32});
      ++state.level;
      changeView(state);
    }
  };
  renderTemplate(genreView.element);
};

export default renderGenre;

