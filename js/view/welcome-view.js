import AbstractView from "./../abstract-view";
import Application from "../app";

class WelcomeView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>Ошибиться можно 3 раза.<br>Удачи!</p>
  </section>`;
  }

  bind() {
    this.element.querySelector(`button.main-play`).addEventListener(`click`, () => {
      Application.showGame();
    });
  }
}

export default WelcomeView;

