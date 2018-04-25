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
    level.onAnswer.bind(this);
    this.changeContentView(level);
  }

  changeLevel() {
    const currentLevel = this.model.currentLevel;
    const state = this.model.currentState;
    let view = null;
    if (game.levels[currentLevel].type === `Artist`) {
      view = new ArtistView(game, this.model.currentLevel, state);
    } else {
      view = new GenreView(game, this.model.currentLevel, state);
    }
    return view;
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  updateHeader() {
    const header = new GetStateGame(this.model.currentState);
    this.root.replaceChild(this.header.element, header.element);
    this.header = header;
  }

  onAnswer(evt) {
    if (evt.target.classList.contains(`main-answer-preview`)) {
      let currentAnswer = this.model.checkAnswer(evt.target.alt, game.levels[this.model.level].answers);
      this.model.addAnswer({answer: currentAnswer, timeLimit: 32});
      if (!currentAnswer) {
        if (!this.model.lostNote(this.model)) {
          console.log(`end's attempts`);
        }
        console.log(`game over`);
      }
      this.model.nextLevel();
      this.changeLevel();
    }
  }


  init() {
  }
}

export default GameScreen;
