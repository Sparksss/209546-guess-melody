import AbstractView from "./../abstract-view";


class SuccessView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="${this.data.title}"><h1>${this.data.title}</h1></section>
    <h2 class="title">${this.data.success.title}</h2>
    <div class="main-stat">${this.data.success.time}
      <br>${this.data.success.pointsCount}
      <br>${this.data.success.errorsCount}</div>
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
