import AbstractView from "./../abstract-view";

class WelcomeView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `<section class="main main--welcome">
    <section class="logo" title="${this.data.title}"><h1>${this.data.title}</h1></section>
    <button class="main-play">${this.data.start}</button>
    <h2 class="title main-title">${this.data.rules.title}</h2>
    <p class="text main-text">${this.data.rules.description}</p>
  </section>`;
  }

  playGame() {
  }

  bind() {
    this.element.querySelector(`button.main-play`).addEventListener(`click`, () => {
      this.playGame();
    });
  }
}

export default WelcomeView;

