const templates = document.querySelector(`#templates`).content;
const mainScreen = document.querySelector(`.main`);
let screensByOrder = [
  `.main--welcome`, `.logo`, `.main--level-artist`, `.main--level-genre`,
  `.main--result`, `.logo`, `.main--result`,
  `.logo`, `.main--result`, `.logo`
];

let screenNumber = 0;

const allScreens = screensByOrder.map((screenTemplate) => {
  return templates.querySelector(screenTemplate);
});

const showScreen = () => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(allScreens[screenNumber]);
};

document.addEventListener(`keydown`, (e) => {
  if (screenNumber < 9) {
    if ((e.altKey) && e.key === `ArrowRight`) {
      showScreen(screenNumber);
      ++screenNumber;
    }
  }
  if (screenNumber > 0) {
    if ((e.altKey) && e.key === `ArrowLeft`) {
      --screenNumber;
      showScreen(screenNumber);
    }
  }
});
