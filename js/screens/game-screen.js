import Application from "./../app";
import {createSection} from "./../utils";
import GenreView from "./../view/genre-view";
import ArtistView from "./../view/artist-view";
import GetStateGame from "../view/state-game-view";

const ONE_SECOND = 1000;
const TYPE_OF_LEVELS = {
  artist: `artist`,
  genre: `genre`
};

const Controls = {
  play: `play`,
  pause: `pause`
};

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
    }, ONE_SECOND);
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
    switch (data[currentLevel].type) {
      case TYPE_OF_LEVELS.artist:
        view = new ArtistView(data, currentLevel);
        view.onAnswer = this.selectAnswer.bind(this);
        break;
      case TYPE_OF_LEVELS.genre:
        view = new GenreView(data, currentLevel);
        view.onAnswer = this.changeAnswers.bind(this);
        view.submitCheckedAnswers = this.selectedAnswers.bind(this);
        view.checkPlayingTrack = this.checkPlaying.bind(this);
    }
    view.controlMusic = this.switchPlaying.bind(this);
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
    if (this.model.currentLevel < this.model.getData.length) {
      return this.startGame();
    }
    this.stopGame();
    return Application.showSuccess(this.model.currentState, this.model.showPassedTheTime());
  }

  isRightOfAnswer(answer) {
    let checkContinue = true;
    if (!answer) {
      this.model.keepLostOfNote();
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

  selectAnswer(answer, isArtist) {
    const timeToAnswer = this.model.lostTime - this.model.currentTime;
    const currentAnswer = this.model.checkAnswer(answer, `title`, this.model.getData[this.model.currentLevel].answers);
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
    this.model.addGenreAnswer(this.model.checkAnswerForGenre(evt.target.dataset.identity, data[level].genre));
    this.root.querySelector(`.genre-answer-send`).disabled = false;
  }

  switchPlaying(playElement, control) {
    switch (control) {
      case Controls.play:
        try {
          playElement.play();
          control = Controls.pause;
        } catch (error) {
          Application.showError(error);
        }

        break;
      case Controls.pause:
        try {
          playElement.pause();
          control = Controls.play;
        } catch (error) {
          Application.showError(error);
        }

        break;
    }
    return control;
  }

  checkPlaying(controlsElement, evt) {
    if (!evt.target.classList.contains(`player-control--pause`)) {
      try {
        controlsElement.forEach((element) => {
          element.classList.remove(`player-control--pause`);
          element.previousElementSibling.pause();
          element.previousElementSibling.dataset.control = Controls.play;
        });
      } catch (error) {
        Application.showError(error);
      }
    }
  }
}

export default GameScreen;
