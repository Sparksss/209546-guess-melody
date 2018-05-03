import AbstractView from "./../abstract-view";
const MAX_MISTAKES = 3;
class GetStateGame extends AbstractView {
  constructor(data, timer) {
    super();
    this.data = data;
    this.timer = timer;
  }

  get notes() {
    return new Array(MAX_MISTAKES - this.data.notes).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``);
  }

  get template() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(..#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    </svg>
    <div class="timer-value ${this.timer.timeOut}">
        <span class="timer-value-mins">0${this.timer.minutes}</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">${this.timer.seconds}</span>
      </div>
    <div class="main-mistakes">${this.notes}</div>`;
  }

  bind() {
    return this.element;
  }
}

export default GetStateGame;
