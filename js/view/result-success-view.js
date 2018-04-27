import AbstractView from "./../abstract-view";


class SuccessView extends AbstractView {
  constructor(data, state) {
    super();
    this.data = data;
    this.state = state;
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">${this.data.success.time}
      <br>${this.data.success.pointsCount}
      <br>совершив ${3 - this.state.notes} ошибки</div>
    <span class="main-comparison">${this.data.success.raiting}</span>
    <span role="button" tabindex="0" class="main-replay">${this.data.playAgainSucces}</span>
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
