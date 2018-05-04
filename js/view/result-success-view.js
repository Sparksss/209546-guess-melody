import AbstractView from "./../abstract-view";

const MAX_MISTAKES = 3;
class SuccessView extends AbstractView {
  constructor(state, message, currentTime) {
    super();
    this.state = state;
    this.message = message;
    this.currentTime = currentTime;
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${this.currentTime.minutes}&nbsp;минуты и ${this.currentTime.seconds}&nbsp;секунд
      <br>вы&nbsp;набрали ${this.state.points.sum} баллов (${this.state.points.speedScore} быстрых)
      <br>совершив ${MAX_MISTAKES - this.state.notes} ошибки</div>
    <span class="main-comparison">${this.message}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;
  }

  restartNow() {
  }

  bind() {
    this.element.querySelector(`span.main-replay`).addEventListener(`click`, (evt) => {
      this.restartNow(evt);
    });
  }
}

export default SuccessView;
