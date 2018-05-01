import Application from "./../app";
import {createSection} from "./../utils";
import {game} from "./../models/game";
import GenreView from "./../view/genre-view";
import ArtistView from "./../view/artist-view";
import GetStateGame from "../view/state-game-view";

class GameScreen {
  constructor(model) {
    this.model = model;
    this.root = createSection();
    this.header = new GetStateGame(this.model.currentState, this.model.getMinutesAndSeconds());
    this.content = this.changeLevel();
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.updateHeader();
    const level = this.changeLevel();
    this.changeContentView(level);
    this.model.setTimeAnswer = this.model.timer;
    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
      if (!this.model.timer) {
        this.stopGame();
        Application.showTimeOut(this.model.currentState);
      }
    }, 1000);
  }

  stopGame() {
    clearInterval(this._interval);
  }

  changeLevel() {
    if (this._interval) {
      this.stopGame();
    }
    const currentLevel = this.model.currentLevel;
    const data = this.model.getData;
    let view = null;
    if (data[currentLevel].type === `artist`) {
      view = new ArtistView(data, currentLevel);
      view.onAnswer = this.answer.bind(this);
    } else {
      view = new GenreView(data, currentLevel);
      view.onAnswer = this.changeAnswers.bind(this);
      view.submitCheckedAnswers = this.selectedAnswers.bind(this);
    }
    return view;
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  updateHeader() {
    const newHeader = new GetStateGame(this.model.currentState, this.model.getMinutesAndSeconds());
    this.root.replaceChild(newHeader.element, this.header.element);
    this.header = newHeader;
  }

  changeNextLevel() {
    if (this.model.currentLevel < game.levels.length) {
      this.startGame();
    } else {
      this.stopGame();
      Application.showSuccess(this.model.currentState, game.statistics, this.model.getMinutesAndSeconds());
    }
  }

  isRightOfAnswer(answer) {
    let checkContinue = true;
    if (!answer) {
      this.model.lossOfNote();
      checkContinue = this.model.currentNotes;
    }
    return checkContinue;
  }

  canContinue(currentAnswer) {
    if (this.isRightOfAnswer(currentAnswer)) {
      this.model.nextLevel();
      this.changeNextLevel();
    } else {
      this.stopGame();
      Application.showAttemptsEnded(this.model.currentState);
    }
  }

  answer(answer, isArtist) {
    const timeToAnswer = this.model.lostTime - this.model.currentTime;
    let currentAnswer = this.model.checkAnswer(answer, `title`, game.levels[this.model.currentLevel].answers);
    this.model.addAnswer({answer: currentAnswer, timeLimit: timeToAnswer});
    if (isArtist) {
      this.canContinue(currentAnswer);
    }
  }

  selectNote(target) {
    target.previousElementSibling.checked = true;
  }

  selectedAnswers() {
    const timeToAnswer = this.model.lostTime - this.model.currentTime;
    const isCorrectAnswer = this.model.isCorrectAnswers(this.model.countAnswers);
    this.model.addAnswer({answer: isCorrectAnswer, timeLimit: timeToAnswer});
    this.canContinue(isCorrectAnswer);
  }

  changeAnswers(evt) {
    const data = this.model.getData;
    const level = this.model.currentLevel;
    this.selectNote(evt.target);
    this.model.addGenreAnswer(this.model.checkAnswerForGenre(evt.target.dataset.identity, `genre`, data[level].answers));
    this.root.querySelector(`.genre-answer-send`).disabled = false;
  }
}

export default GameScreen;
