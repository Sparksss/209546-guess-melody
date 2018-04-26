import {initializationState} from "./../models/initialization-state";

class GameModel {
  constructor() {
    this.state = initializationState();
  }

  get currentState() {
    return this.state;
  }

  nextLevel() {
    ++this.state.level;
  }

  get currentLevel() {
    return this.state.level;
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

  restart() {
    this.state = initializationState();
  }


  checkAnswer(currentAnswer, checkElem, answers) {
    let isCorrect = false;
    for (const answer of answers) {
      if (answer[checkElem] === currentAnswer) {
        isCorrect = answer.isCorrect;
        break;
      }
    }
    return isCorrect;
  }

  addAnswer(isCorrect) {
    this.state.answers.push(isCorrect);
  }

}


export default GameModel;

