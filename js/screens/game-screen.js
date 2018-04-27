import Application from "./../app";
import {createSection} from "./../utils";
import {game} from "./../models/game";
import GenreView from "./../view/genre-view";
import ArtistView from "./../view/artist-view";
import GetStateGame from "../view/state-game-view";

class GameScreen {
  constructor(model) {
    this.model = model;
    this.root = createSection(``);
    this.header = new GetStateGame(this.model.currentState);
    this.content = new ArtistView(game, this.model.currentLevel, this.model.currentState);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this.timeOut = null;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.updateHeader();
    const level = this.changeLevel();
    this.changeContentView(level);
  }

  changeLevel() {
    const currentLevel = this.model.currentLevel;
    const state = this.model.currentState;
    let view = null;
    if (game.levels[currentLevel].type === `Artist`) {
      view = new ArtistView(game, currentLevel, state);
      view.onAnswer = this.answer.bind(this);
    } else {
      view = new GenreView(game, currentLevel, state);
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
    const newHeader = new GetStateGame(this.model.currentState);
    this.root.replaceChild(newHeader.element, this.header.element);
    this.header = newHeader;
  }

  changeNextLevel() {
    if (this.model.currentLevel < game.levels.length) {
      this.startGame();
    } else {
      Application.showSuccess();
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
      Application.showAttemptsEnded();
    }
  }

  answer(answer, isArtist) {
    let currentAnswer = this.model.checkAnswer(answer, `title`, game.levels[this.model.currentLevel].answers);
    this.model.addAnswer({answer: currentAnswer, timeLimit: 32});
    if (isArtist) {
      this.canContinue(currentAnswer);
    }

  }

  selectNote(target) {
    target.previousElementSibling.checked = true;
  }

  selectedAnswers() {
    const isCorrectAnswer = this.model.isCorrectAnswers(this.model.countAnswers);
    this.model.addAnswer({answer: isCorrectAnswer, timeLimit: 32});
    this.canContinue(isCorrectAnswer);
  }

  changeAnswers(evt) {
    this.selectNote(evt.target);
    this.model.addGenreAnswer(this.model.checkAnswer(evt.target.dataset.identity, `title`, game.levels[this.model.currentLevel].answers));
    this.root.querySelector(`.genre-answer-send`).disabled = false;
    console.log(this.model.countAnswers);
  }
}

export default GameScreen;
