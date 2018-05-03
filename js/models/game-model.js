import {initializationState} from "./../models/initialization-state";

const LESS_THEN_TEN_SECONDS = 10;
const SECONDS_IN_MINUTE = 60;

class GameModel {
  constructor(data) {
    this.setData = data;
    this.state = initializationState();
  }

  set setData(data) {
    this.data = data;
  }

  get getData() {
    return this.data;
  }

  get currentState() {
    return this.state;
  }

  get currentTime() {
    return this.state.time;
  }

  set setTimeAnswer(time) {
    this.state.lostTime = time;
  }

  get lostTime() {
    return this.state.lostTime;
  }

  get timer() {
    return this.state.time;
  }

  get currentLevel() {
    return this.state.level;
  }


  get currentNotes() {
    return this.state.notes;
  }


  get countAnswers() {
    return this.state.countAnswers;
  }


  tick() {
    --this.state.time;
  }

  getMinutesAndSeconds() {
    const minutes = Math.floor(this.state.time / SECONDS_IN_MINUTE);
    const seconds = this.state.time - minutes * SECONDS_IN_MINUTE;
    return {minutes, seconds: seconds < LESS_THEN_TEN_SECONDS ? `0${seconds}` : seconds};
  }

  nextLevel() {
    ++this.state.level;
  }

  isCorrectAnswers(answers) {
    const isCorrectAnswer = answers.every((answer) => {
      return answer === true;
    });
    return isCorrectAnswer;
  }

  keepLostOfNote() {
    --this.state.notes;
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

  checkAnswerForGenre(currentAnswer, rightAnswer) {
    return currentAnswer === rightAnswer;
  }

  addAnswer(isCorrect) {
    this.state.answers.push(isCorrect);
  }

}


export default GameModel;

