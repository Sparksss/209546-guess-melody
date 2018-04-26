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
    level.onAnswer = this.answer.bind(this);
    this.changeContentView(level);
  }

  changeLevel() {
    const currentLevel = this.model.currentLevel;
    const state = this.model.currentState;
    let view = null;
    if (game.levels[currentLevel].type === `Artist`) {
      view = new ArtistView(game, currentLevel, state);
    } else {
      view = new GenreView(game, currentLevel, state);
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

  answer(answer) {
    let currentAnswer = this.model.checkAnswer(answer, `title`, game.levels[this.model.currentLevel].answers);
    this.model.addAnswer({answer: currentAnswer, timeLimit: 32});
    if (!currentAnswer) {
      this.model.lostNote();
      if (!this.model.currentNotes) {
        Application.showAttemptsEnded();
      }
      this.model.nextLevel();
      this.changeContentView(this.startGame());
    }
  }


  init() {
  }
}

export default GameScreen;
