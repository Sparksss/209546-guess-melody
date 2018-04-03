import createElement from "./../-create-elem";
import renderScreen from "./../-render-screen";
import artist from "./-artist-module";

const welcomeElement = createElement`<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;

const renderWelcomeScreen = () => {
  renderScreen(welcomeElement);
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-play`)) {
    artist();
  }
});

export default renderWelcomeScreen;

