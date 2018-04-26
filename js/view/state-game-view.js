import AbstractView from "./../abstract-view";

class GetStateGame extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get notes() {
    return new Array(3 - this.data.notes).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``);
  }

  get template() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(..#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">${this.notes}</div>`;
  }

  bind() {
    return this.element;
  }
}

export default GetStateGame;
