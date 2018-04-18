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

// const getWelcomeElement = (data) => `<section class="main main--welcome">
//     <section class="logo" title="${data.title}"><h1>${data.title}</h1></section>
//     <button class="main-play">${data.start}</button>
//     <h2 class="title main-title">${data.rules.title}</h2>
//     <p class="text main-text">
//       ${data.rules.description}<br>
//       ${data.rules.warnings}<br>
//       ${data.rules.inf}
//     </p>
//   </section>`;
//
// const welcomeScreen = () => {
//   renderTemplate(createElement(getWelcomeElement(startGame)));
// };
//
// document.addEventListener(`click`, (evt) => {
//   if (evt.target.classList.contains(`main-play`)) {
//     artistScreen();
//   }
// });

export default WelcomeView;

