
import AbstractView from "./../../abstract-view";


class TimeOutView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="${this.data.title}"><h1>${this.data.title}</h1></section>
    <h2 class="title">${this.data.timeOut.title}</h2>
    <div class="main-stat">${this.data.timeOut.endsOfTime}</div>
    <span role="button" tabindex="0" class="main-replay">${this.data.playAgainLose}</span>
  </section>`;
  }

  restartGame() {
  }

  bind() {
    this.element.querySelector(`span.main-replay`).addEventListener(`click`, (evt) => {
      this.restartGame(evt);
    });
  }
}

export default TimeOutView;
