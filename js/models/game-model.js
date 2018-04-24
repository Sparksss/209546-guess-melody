class GameModel {
  constructor(state) {
    this.state = state;
  }

  get currentState() {
    return this.state;
  }
  nextLevel() {
    ++this.state.level;
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

  checkAnswer(currentAnswer, checkElem, answers) {
    let isCorrect = false;
    for (const answer of answers) {
      if (answer[checkElem] === currentAnswer) {
        isCorrect = true;
        break;
      }
    }
    return isCorrect;
  }

  addAnswer(isCorrect) {
    this.state.answers.push({answer: isCorrect, time: 32});
  }

}


export default GameModel;

