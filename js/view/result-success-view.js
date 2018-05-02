import AbstractView from "./../abstract-view";


class SuccessView extends AbstractView {
  constructor(state, message, currentTime, speedScore) {
    super();
    this.state = state;
    this.message = message;
    this.currentTime = currentTime;
    this.speedScore = speedScore;
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${this.currentTime.minutes}&nbsp;минуты и ${this.currentTime.seconds}&nbsp;секунд
      <br>вы&nbsp;набрали ${this.state.points} баллов (${this.speedScore} быстрых)
      <br>совершив ${3 - this.state.notes} ошибки</div>
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
