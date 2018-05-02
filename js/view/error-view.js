import AbstractView from "./../abstract-view";


class ShowError extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <div class="main-stat">${this.error}</div>
  </section>`;
  }
}

export default ShowError;
