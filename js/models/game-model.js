import {initializationState} from "./../models/initialization-state";

class GameModel {
  constructor() {
    this.state = initializationState();
  }

  get currentState() {
    return this.state;
  }

  tick() {
    --this.state.time;
    if (this.state.time <= 0) {
      this.state.time = `time is over!`;
    }
  }

  get timer() {
    return this.state.time;
  }

  getMinutesAndSeconds() {
    const minutes = Math.floor(this.state.time / 60);

    return {minutes, seconds: this.state.time - minutes * 60};
  }

  nextLevel() {
    ++this.state.level;
  }

  get currentLevel() {
    return this.state.level;
  }

  isCorrectAnswers(answers) {
    const isCorrectAnswer = answers.every((answer) => {
      return answer === true;
    });
    return isCorrectAnswer;
  }

  get currentNotes() {
    return this.state.notes;
  }

  lossOfNote() {
    --this.state.notes;
  }

  get countAnswers() {
    return this.state.countAnswers;
  }

  addGenreAnswer(answer) {
    this.state.countAnswers.push(answer);
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

