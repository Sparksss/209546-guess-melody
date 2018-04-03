import createElement from './../-create-elem';
import renderScreen from "./../-render-screen";
import welcome from "./-welcome";

const attemptsEnded = createElement`<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const renderAttemptsEnded = () => {
  renderScreen(attemptsEnded);
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-replay`)) {
    evt.preventDefault();
    welcome();
  }
});

export default renderAttemptsEnded;
