import config from "../lib/config";

class GameModel {
  constructor() {
    this.state = Object.assign({}, config);
  }

  get currentState() {
    return this.state;
  }

  set nextLevel(level) {
    this.state.level = level;
  }

  get currentNotes() {
    return this.state.notes;
  }

  checkStillNumbersOfNotes() {
    return this.state.notes - 1 > 0;
  }

  lostNote() {
    --this.state.notes;
  }

}


export default GameModel;

